package Flower.minima.system.brains;

import java.util.ArrayList;

import Flower.json.simple.JSONArray;
import Flower.json.simple.JSONObject;
import Flower.minima.GlobalParams;
import Flower.minima.database.MinimaDB;
import Flower.minima.database.coindb.CoinDBPrinter;
import Flower.minima.database.coindb.CoinDBRow;
import Flower.minima.database.mmr.MMRPrint;
import Flower.minima.database.mmr.MMRProof;
import Flower.minima.database.mmr.MMRSet;
import Flower.minima.database.txpowdb.TxPowDBPrinter;
import Flower.minima.database.txpowtree.BlockTreeNode;
import Flower.minima.database.txpowtree.BlockTreePrinter;
import Flower.minima.objects.Address;
import Flower.minima.objects.Coin;
import Flower.minima.objects.PubPrivKey;
import Flower.minima.objects.TxPOW;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.system.Main;
import Flower.minima.system.input.InputHandler;
import Flower.minima.system.network.NetClient;
import Flower.minima.utils.Maths;
import Flower.minima.utils.SimpleLogger;
import Flower.minima.utils.messages.Message;

public class ConsensusPrint {


	public static final String CONSENSUS_PREFIX 			= "CONSENSUSPRINT_";
	
	public static final String CONSENSUS_BALANCE 			= CONSENSUS_PREFIX+"BALANCE";
	public static final String CONSENSUS_COINS 				= CONSENSUS_PREFIX+"COINS";
	public static final String CONSENSUS_TXPOW 				= CONSENSUS_PREFIX+"TXPOW";
	public static final String CONSENSUS_KEYS 				= CONSENSUS_PREFIX+"KEYS";
	
	public static final String CONSENSUS_STATUS 			= CONSENSUS_PREFIX+"STATUS";
	public static final String CONSENSUS_PRINTCHAIN 		= CONSENSUS_PREFIX+"PRINTCHAIN";
	
	public static final String CONSENSUS_PRINTCHAIN_TREE 	= CONSENSUS_PREFIX+"PRINTCHAIN_TREE";
	
    MinimaDB mDB;
	
	ConsensusHandler mHandler;
	
	public ConsensusPrint(MinimaDB zDB, ConsensusHandler zHandler) {
		mDB = zDB;
		mHandler = zHandler;
	}
	
	private MinimaDB getMainDB() {
		return mDB;
	}
	
	private ConsensusHandler getHandler() {
		return mHandler;
	}
	
	public void processMessage(Message zMessage) throws Exception {
	
		if(zMessage.isMessageType(CONSENSUS_PRINTCHAIN)) {
			SimpleLogger.log("-------------");
			SimpleLogger.log("- MINIMA DB -");
			SimpleLogger.log("-------------");
			
			//Print the Tree
			BlockTreePrinter treeprint = new BlockTreePrinter(getMainDB().getMainTree());
			treeprint.printtree();
			
			//Print the TxPowDB
			TxPowDBPrinter.PrintDB(getMainDB().getTxPowDB());
			
			//Print the COinDB
			CoinDBPrinter.Print(getMainDB().getCoinDB());
			
			if(getMainDB().getMainTree().getChainRoot() == null) {
				SimpleLogger.log("NO BLOCKS!");
				return;
			}
			
			//MMR
			SimpleLogger.log("---");
			SimpleLogger.log("MMR");
			SimpleLogger.log("---");
			MMRSet set = getMainDB().getMainTree().getChainTip().getMMRSet();
			MMRPrint.Print(set);
		
		}else if(zMessage.isMessageType(CONSENSUS_PRINTCHAIN_TREE)){
			SimpleLogger.log("----------------");
			SimpleLogger.log("- MINIMA CHAIN -");
			SimpleLogger.log("----------------");
			
			//Print the Tree
			BlockTreePrinter treeprint = new BlockTreePrinter(getMainDB().getMainTree());
			treeprint.printtree();
		
		}else if(zMessage.isMessageType(CONSENSUS_BALANCE)){
			
//			//Now get the balance..
//			Hashtable<MiniData32, MiniNumber> totals = new Hashtable<>();
//			
//			ArrayList<CoinDBRow> coins = getMainDB().getCoinDB().getComplete();
//			for(CoinDBRow coin : coins) {
//				if(!coin.isSpent()) {
//					//What Token..
//					MiniData32 tokid = coin.getCoin().getTokenID();
//					
//					//Get the Current total..
//					MiniNumber curr = totals.get(tokid);
//					if(curr == null) {
//						curr = MiniNumber.ZERO;
//					}
//					
//					//Add it..
//					curr = curr.add(coin.getCoin().getAmount());
//					
//					//Readd..
//					totals.put(tokid, curr);
//				}
//			}
//			
//			//All the balances..
//			JSONArray totbal = new JSONArray();
//			
//			if(totals.size() ==0) {
//				JSONObject minbal = new JSONObject();
//				minbal.put("tokenid", MiniData32.ZERO32.toString());
//				minbal.put("balance", "0");
//				totbal.add(minbal);
//				
//			}else {
//				//Now create a JSON Object
//				Enumeration<MiniData32> keys = totals.keys();
//				while(keys.hasMoreElements())  {
//					MiniData32 key = keys.nextElement();
//					MiniNumber tot = totals.get(key);
//					
//					JSONObject minbal = new JSONObject();
//					minbal.put("tokenid", key.toString());
//					minbal.put("balance", tot.toString());
//					totbal.add(minbal);
//				}	
//			}
			
			MiniNumber unconfirmed_total 		= new MiniNumber();
			MiniNumber confirmed_total 			= new MiniNumber();
			
			MiniNumber top = getMainDB().getTopBlock();
			ArrayList<CoinDBRow> coins = getMainDB().getCoinDB().getComplete();
			for(CoinDBRow coin : coins) {
				if(coin.isInBlock()) {
					MiniNumber depth = top.sub(coin.getInBlockNumber());
					if(!coin.isSpent()) {
						if(depth.isMoreEqual(GlobalParams.MINIMA_CONFIRM_DEPTH)) {
							confirmed_total = confirmed_total.add(coin.getCoin().getAmount());
						}else {
							unconfirmed_total = unconfirmed_total.add(coin.getCoin().getAmount());
						}
					}
				}
			}
			
			//The Object
			JSONObject minbal = InputHandler.getResponseJSON(zMessage);
			minbal.put("confirmed", confirmed_total.toString());
			minbal.put("unconfirmed", unconfirmed_total.toString());
			
			//Add it to the output
			InputHandler.endResponse(zMessage, true, "");
		
		}else if(zMessage.isMessageType(CONSENSUS_COINS)){
			//get the MMR
			BlockTreeNode tip  		= getMainDB().getMainTree().getChainTip();
			MMRSet baseset 			= tip.getMMRSet();
			
			MiniNumber top = getMainDB().getTopBlock();
			ArrayList<CoinDBRow> coins = getMainDB().getCoinDB().getComplete();
			int counter=0;
			for(CoinDBRow coin : coins) {
				if(!coin.isSpent()) {
					InputHandler.getResponseJSON(zMessage).put(counter++, baseset.getProof(coin.getMMREntry()) );
				}
			}
			
			//Add it to the output
			InputHandler.endResponse(zMessage, true, "");
		
		}else if(zMessage.isMessageType(CONSENSUS_TXPOW)){
			String txpow = zMessage.getString("txpow");
			MiniData32 txp = new MiniData32(txpow);
			
			TxPOW pow = getMainDB().getTxPOW(txp);
			
			if(pow == null) {
				InputHandler.endResponse(zMessage, false, "No TxPOW found for "+txpow);
			}else {
				InputHandler.getResponseJSON(zMessage).put("txpow", pow.toJSON());
				InputHandler.endResponse(zMessage, true, "");
			}
		
		}else if(zMessage.isMessageType(CONSENSUS_KEYS)){
			//Public Keys
			ArrayList<PubPrivKey> keys = getMainDB().getUserDB().getKeys();
			JSONArray arrpub = new JSONArray();
			for(PubPrivKey key : keys) {
				arrpub.add(key.toString());
			}
			InputHandler.getResponseJSON(zMessage).put("publickeys", arrpub);
			
			//Addresses
			ArrayList<Address> addresses = getMainDB().getUserDB().getAllAddresses();
			JSONArray arraddr = new JSONArray();
			for(Address addr : addresses) {
				arraddr.add(addr.toJSON());
			}
			InputHandler.getResponseJSON(zMessage).put("addresses", arraddr);
			
			InputHandler.endResponse(zMessage, true, "");
			
		}else if(zMessage.isMessageType(CONSENSUS_STATUS)){
			//Main Handler
			Main main = getHandler().getMainHandler();
			
			if(getMainDB().getMainTree().getChainRoot() == null) {
				//Add it to the output
				InputHandler.endResponse(zMessage, false, "No blocks!");
				return;
			}
			
			//What block are we on
			BlockTreeNode tip  		= getMainDB().getMainTree().getChainTip();
			BlockTreeNode root 		= getMainDB().getMainTree().getChainRoot();
			long lastblock 			= tip.getTxPow().getBlockNumber().getAsLong();
			
			//Get the response JSON
			JSONObject status = InputHandler.getResponseJSON(zMessage);
			
			//Version
			status.put("version", 0.4);
			
			//Up time..
			long timediff     = System.currentTimeMillis() - getHandler().getMainHandler().getNodeStartTime();
			String uptime     = Maths.ConvertMilliToTime(timediff);	
			status.put("milliuptime", timediff);
			status.put("stringuptime", uptime);
			status.put("conf", main.getBackupManager().getRootFolder());
			status.put("host", main.getNetworkHandler().getServer().getHost());
			status.put("port", main.getNetworkHandler().getServer().getPort());
			status.put("rpcport", main.getNetworkHandler().getRPCServer().getPort());
			status.put("pulse", main.getsimulator().mMiningON);
			
			status.put("root", root.getTxPow().toJSON());
			status.put("tip", tip.getTxPow().toJSON());
			status.put("chainspeed", getMainDB().getMainTree().getChainSpeed());
			
			status.put("lastblock", lastblock);
			status.put("totalpow", root.getTotalWeight());
			
			//Add the network connections
			ArrayList<NetClient> nets = main.getNetworkHandler().getNetClients();
			if(nets.size()>0) {
				JSONArray netarr = new JSONArray();
				for(NetClient net : nets) {
					netarr.add(net.toJSON());
				}
				status.put("network", netarr);
			}
			
			//Add it to the output
			InputHandler.endResponse(zMessage, true, "");
			
			if(true) {
				return;	
			}
			
//			SimpleLogger.log("------------");
//			SimpleLogger.log("Node Details");
//			SimpleLogger.log("------------");
//			SimpleLogger.log("Version   : 0.4");
//			SimpleLogger.log("Uptime    : "+uptime);
//			SimpleLogger.log("Conf      : "+main.getBackupManager().getRootFolder());
//			SimpleLogger.log("Host      : "+main.getNetworkHandler().getServer().getHost());
//			SimpleLogger.log("Port      : "+main.getNetworkHandler().getServer().getPort());
//			SimpleLogger.log("Pulse     : ["+main.getsimulator().mMiningON+"] "+main.getsimulator().mCounter);
//			SimpleLogger.log("ROOT      : "+root);
//			SimpleLogger.log("TIP       : "+tip);
//			SimpleLogger.log("Top Block : "+lastblock);
//			SimpleLogger.log("Total POW : "+root.getTotalWeight());
//			SimpleLogger.log("IBD bytes : "+getMainDB().getIntroSyncSize());
//			
			SimpleLogger.log("");
			SimpleLogger.log("-----");
			SimpleLogger.log("Wallet");
			SimpleLogger.log("-----");
			
			//Public Keys
			ArrayList<PubPrivKey> keys = getMainDB().getUserDB().getKeys();
			for(PubPrivKey key : keys) {
				SimpleLogger.log("Public Key : "+key.toString());
			}
			if(keys.size()>0) {SimpleLogger.log("------------");}
			
			//Addresses
			ArrayList<Address> addresses = getMainDB().getUserDB().getAllAddresses();
			for(Address addr : addresses) {
				SimpleLogger.log("Address    : "+addr.toFullString());
			}
			if(addresses.size()>0) {SimpleLogger.log("------------");}
			
			MiniNumber unconfirmed_total 		= new MiniNumber();
			MiniNumber unconfirmed_total_spent 	= new MiniNumber();
			MiniNumber confirmed_total 			= new MiniNumber();
			MiniNumber confirmed_total_spent 	= new MiniNumber();
			
//			//get the MMR
//			MMRSet baseset = tip.getMMRSet();
//			
//			MiniNumber top = getMainDB().getTopBlock();
//			ArrayList<CoinDBRow> coins = getMainDB().getCoinDB().getComplete();
//			for(CoinDBRow coin : coins) {
//				if(!coin.isSpent()) {
//					//Print it..
//					SimpleLogger.log("Coin       : "+coin.toString());
//					MMRProof proof = baseset.getProof(coin.getMMREntry());
//					SimpleLogger.log("Proof      : "+proof.toString()+" valid:"+baseset.checkProof(proof));
//					if(!coin.getCoin().getTokenID().isExactlyEqual(Coin.MINIMA_TOKENID)) {
//						SimpleLogger.log("Token      : "+coin.getCoin().getTokenID());
//					}
//					SimpleLogger.log("Amount     : "+coin.getCoin().getAmount());
//					SimpleLogger.log("");
//				}
//				
//				if(coin.isInBlock()) {
//					MiniNumber depth = top.sub(coin.getInBlockNumber());
//					if(coin.isSpent()) {
//						if(depth.isMoreEqual(GlobalParams.MINIMA_CONFIRM_DEPTH)) {
//							confirmed_total_spent = confirmed_total_spent.add(coin.getCoin().getAmount());
//						}else {
//							unconfirmed_total_spent = unconfirmed_total_spent.add(coin.getCoin().getAmount());
//						}
//					}else {
//						if(depth.isMoreEqual(GlobalParams.MINIMA_CONFIRM_DEPTH)) {
//							confirmed_total = confirmed_total.add(coin.getCoin().getAmount());
//						}else {
//							unconfirmed_total = unconfirmed_total.add(coin.getCoin().getAmount());
//						}
//					}
//				}
//			}
//			
////			SimpleLogger.log("  UNCONFIRMED SPENT : "+unconfirmed_total_spent);
////			SimpleLogger.log("    CONFIRMED SPENT : "+confirmed_total_spent);
//			SimpleLogger.log("UNCONFIRMED : "+unconfirmed_total);
//			SimpleLogger.log("  CONFIRMED : "+confirmed_total);
//			
//			//Get main
//			ArrayList<NetClient> nets = main.getNetworkHandler().getNetClients();
//			if(nets.size()>0) {
//				SimpleLogger.log("---------------");
//				SimpleLogger.log("Network Clients");
//				SimpleLogger.log("---------------");
//				for(NetClient net : nets) {
//					SimpleLogger.log(""+net);
//				}
//			}
		}
	}
	
}

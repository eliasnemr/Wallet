package Flower.minima.system.brains;

import java.util.ArrayList;

import Flower.minima.database.MinimaDB;
import Flower.minima.database.userdb.UserDBRow;
import Flower.minima.miniscript.Contract;
import Flower.minima.objects.Address;
import Flower.minima.objects.Coin;
import Flower.minima.objects.PubPrivKey;
import Flower.minima.objects.Transaction;
import Flower.minima.objects.Witness;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Crypto;
import Flower.minima.utils.SimpleLogger;
import Flower.minima.utils.messages.Message;

public class ConsensusTxn {

	/**
	 * Used for the custom Transactions
	 */
	public static final String CONSENSUS_PREFIX 			= "CONSENSUSTXN_";
	
	public static final String CONSENSUS_TXNCREATE 			= CONSENSUS_PREFIX+"TXNCREATE";
	public static final String CONSENSUS_TXNDELETE 			= CONSENSUS_PREFIX+"TXNDELETE";
	public static final String CONSENSUS_TXNLIST 			= CONSENSUS_PREFIX+"TXNLIST";
	public static final String CONSENSUS_TXNINPUT 			= CONSENSUS_PREFIX+"TXNINPUT";
	public static final String CONSENSUS_TXNINPARAM 		= CONSENSUS_PREFIX+"TXNINPARAM";
	public static final String CONSENSUS_TXNOUTPUT 			= CONSENSUS_PREFIX+"TXNOUTPUT";
	public static final String CONSENSUS_TXNSIGN 			= CONSENSUS_PREFIX+"TXNSIGN";
	public static final String CONSENSUS_TXNVALIDATE 		= CONSENSUS_PREFIX+"TXNVALIDATE";
	public static final String CONSENSUS_TXNPOST 			= CONSENSUS_PREFIX+"TXNPOST";
	
	MinimaDB mDB;
	
	ConsensusHandler mHandler;
	
	public ConsensusTxn(MinimaDB zDB, ConsensusHandler zHandler) {
		mDB = zDB;
		mHandler = zHandler;
	}
	
	private MinimaDB getMainDB() {
		return mDB;
	}
	
	private boolean checkTransactionValid(int zTrans) {
		//Get the user row
		UserDBRow row = getMainDB().getUserDB().getUserRow(zTrans);
		
		if(row == null) {
			return false;
		}
		
		return true;
	}
	 
	public void processMessage(Message zMessage) throws Exception {
		
		/**
		 * Custom Transactions
		 */
		if(zMessage.isMessageType(CONSENSUS_TXNCREATE)) {
			getMainDB().getUserDB().addUserRow();
			mHandler.PostMessage(CONSENSUS_TXNLIST);
		
		}else if(zMessage.isMessageType(CONSENSUS_TXNDELETE)) {
			//Which transaction
			int trans    = zMessage.getInteger("transaction");
			
			getMainDB().getUserDB().deleteUserRow(trans);
			
			mHandler.PostMessage(CONSENSUS_TXNLIST);
			
		}else if(zMessage.isMessageType(CONSENSUS_TXNLIST)) {
			//Get all the current transactions
			SimpleLogger.log("All current Custom Transactions");
			SimpleLogger.log("-------------------------------");
			
			//get all the transactions..
			ArrayList<UserDBRow> rows = getMainDB().getUserDB().getAllRows();
			for(UserDBRow row : rows) {
				SimpleLogger.log(row.toString());
			}
			
		
		}else if(zMessage.isMessageType(CONSENSUS_TXNINPUT)) {
			//Add input to a custom transaction
			int trans 			= zMessage.getInteger("transaction");
			MiniData32 coinid 	= (MiniData32) zMessage.getObject("coinid");
			String params       = Contract.cleanScript(zMessage.getString("params"));
			
			//Check valid..
			if(!checkTransactionValid(trans)) {System.out.println("Invalid TXN chosen : "+trans); return;}
			
			//Get the Transaction..
			Transaction trx =  getMainDB().getUserDB().getUserRow(trans).getTransaction();
			Witness wit     =  getMainDB().getUserDB().getUserRow(trans).getWitness();
			
			//Get the Coin..
			Coin cc = getMainDB().getCoinDB().getCoinRow(coinid).getCoin();
			
			//Get the Script
			String script = getMainDB().getUserDB().getScript(cc.getAddress());
			if(script.equals("")) {
				System.out.println("ERROR UNKNOWN ADDRESS "+cc.getAddress()+" not in database..");
				return;
			}
			
			//Add it..
			trx.addInput(cc);
			
			//Set Params
			wit.addParam(params);
			
			//Set Script
			wit.addScript(script);
			
			mHandler.PostMessage(CONSENSUS_TXNLIST);
		
		}else if(zMessage.isMessageType(CONSENSUS_TXNOUTPUT)) {
			//Which transaction
			int trans    = zMessage.getInteger("transaction");
			
			//Check valid..
			if(!checkTransactionValid(trans)) {System.out.println("Invalid TXN chosen : "+trans); return;}
			
			//Get the Address
			Address addr = (Address) zMessage.getObject("address");
			
			//And the Value
			String value = zMessage.getString("value");
			
			//What Token ID.. ?
			String tokenid = zMessage.getString("tokenid");
			
			//Create a coin
			Coin out = new Coin(Coin.COINID_OUTPUT,addr.getAddressData(),new MiniNumber(value), new MiniData32(tokenid));
			
			//Get the Transaction..
			Transaction trx = getMainDB().getUserDB().getUserRow(trans).getTransaction();
		
			//Add the output
			trx.addOutput(out);
			
			mHandler.PostMessage(CONSENSUS_TXNLIST);
			
		}else if(zMessage.isMessageType(CONSENSUS_TXNPOST)) {
			//Which transaction
			int trans    = zMessage.getInteger("transaction");
			
			//Check valid..
			if(!checkTransactionValid(trans)) {System.out.println("Invalid TXN chosen : "+trans); return;}
			
			//Get the Transaction..
			Transaction trx =  getMainDB().getUserDB().getUserRow(trans).getTransaction();
		
			//Get the witness..
			Witness wit = new Witness();
			
			//Post it..
			mHandler.PostMessage(new Message(ConsensusHandler.CONSENSUS_SENDTRANS).addObject("transaction", trx).addObject("witness", wit));
		
		}else if(zMessage.isMessageType(CONSENSUS_TXNVALIDATE)) {
			//Which transaction
			int trans    = zMessage.getInteger("transaction");
			
			//Check valid..
			if(!checkTransactionValid(trans)) {System.out.println("Invalid TXN chosen : "+trans); return;}
			
			//Get the user row
			UserDBRow row = getMainDB().getUserDB().getUserRow(trans);
			
			//Get the Transaction..
			Transaction trx =  row.getTransaction();
			Witness wit     = row.getWitness();
			
			//sum inputs
			SimpleLogger.log("Custom transaction : "+row);
			SimpleLogger.log("Inputs  ["+trx.getAllInputs().size()+"] total  : "+trx.sumInputs());
			SimpleLogger.log("Outputs ["+trx.getAllOutputs().size()+"] total  : "+trx.sumOutputs());
			
			//And Check the actual Transaction..
			boolean checkok = TxPOWChecker.checkTransactionMMR(trx, wit, getMainDB(),
					getMainDB().getTopBlock(),getMainDB().getMainTree().getChainTip().getMMRSet(),false);
			
			SimpleLogger.log("Transaction valid : "+checkok);
			
		}else if(zMessage.isMessageType(CONSENSUS_TXNSIGN)) {
			//Sign the custom transaction
			int trans     = zMessage.getInteger("transaction");
			String pubkey = zMessage.getString("pubkey");
			MiniData pubk = new MiniData(pubkey);
			
			//Check valid..
			if(!checkTransactionValid(trans)) {System.out.println("Invalid TXN chosen : "+trans); return;}
			
			//Get the public key
			PubPrivKey key = getMainDB().getUserDB().getPubPrivKey(pubk);
			if(key == null) {
				SimpleLogger.log("ERROR : invalidate key to sign with. Not present in DB. "+pubkey);
				return;
			}
			
			//Get the user row
			UserDBRow row = getMainDB().getUserDB().getUserRow(trans);
			
			//Get the Transaction..
			Transaction trx =  row.getTransaction();
			Witness wit     = row.getWitness();
			
			MiniData32 transhash = Crypto.getInstance().hashObject(trx);
			
			MiniData signature = key.sign(transhash);
			
			//Now set the SIG.. (HACK for now just add thepub key..)
			wit.addSignature(pubk, signature);
			
			//List them..
			mHandler.PostMessage(CONSENSUS_TXNLIST);
		}
		
		
	}

}

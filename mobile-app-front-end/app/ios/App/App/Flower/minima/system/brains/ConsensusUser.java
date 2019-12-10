package Flower.minima.system.brains;

import Flower.json.simple.JSONObject;
import Flower.minima.database.MinimaDB;
import Flower.minima.miniscript.Contract;
import Flower.minima.objects.Address;
import Flower.minima.objects.PubPrivKey;
import Flower.minima.objects.Transaction;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.system.input.InputHandler;
import Flower.minima.utils.SimpleLogger;
import Flower.minima.utils.messages.Message;

public class ConsensusUser {


	public static final String CONSENSUS_PREFIX 			= "CONSENSUSUSER_";
	
	public static final String CONSENSUS_NEWSIMPLE 			= CONSENSUS_PREFIX+"NEWSIMPLE";
	public static final String CONSENSUS_NEWSCRIPT 			= CONSENSUS_PREFIX+"NEWSCRIPT";
	public static final String CONSENSUS_RUNSCRIPT 			= CONSENSUS_PREFIX+"RUNSCRIPT";
	
	public static final String CONSENSUS_EXPORTKEY 			= CONSENSUS_PREFIX+"EXPORTKEY";
	public static final String CONSENSUS_IMPORTKEY 			= CONSENSUS_PREFIX+"IMPORTKEY";
	public static final String CONSENSUS_EXPORTCOIN 		= CONSENSUS_PREFIX+"EXPORTCOIN";
	public static final String CONSENSUS_IMPORTCOIN 		= CONSENSUS_PREFIX+"IMPORTCOIN";
	
    MinimaDB mDB;
	
	ConsensusHandler mHandler;
	
	public ConsensusUser(MinimaDB zDB, ConsensusHandler zHandler) {
		mDB = zDB;
		mHandler = zHandler;
	}
	
	private MinimaDB getMainDB() {
		return mDB;
	}
	 
	public void processMessage(Message zMessage) throws Exception {
		
		if(zMessage.isMessageType(CONSENSUS_NEWSIMPLE)) {
			//Create a new simple address
			Address addr = getMainDB().getUserDB().newSimpleAddress();
			
			JSONObject resp = InputHandler.getResponseJSON(zMessage);
			resp.put("address", addr.getAddressData().toString());
			resp.put("script", addr.getScript().toString());
			InputHandler.endResponse(zMessage, true, "");
			
		}else if(zMessage.isMessageType(CONSENSUS_NEWSCRIPT)) {
			//Get the script
			String script = zMessage.getString("script");
			
			Address addr = getMainDB().getUserDB().newScriptAddress(script);
			
			JSONObject resp = InputHandler.getResponseJSON(zMessage);
			resp.put("address", addr.getAddressData().toString());
			resp.put("script", addr.getScript().toString());
			InputHandler.endResponse(zMessage, true, "");
			
		}else if(zMessage.isMessageType(CONSENSUS_RUNSCRIPT)) {
			String script = zMessage.getString("script");
			String params = zMessage.getString("params");
			String sigs   = zMessage.getString("sigs");
			
			//Set up a contract
			script = Contract.cleanScript(script);
			params = Contract.cleanScript(params);
			sigs   = Contract.cleanScript(sigs);
			
			//Create a contract
			Contract cc = new Contract(script, params, sigs,new Transaction(),true);
			
			//set the environment
			MiniNumber blocknum  = getMainDB().getTopBlock();
			String address = "0x00";
			cc.setupGlobalEnvironment(blocknum, address, MiniNumber.ZERO);
			
			//Run it!
			cc.run();
		
		}else if(zMessage.isMessageType(CONSENSUS_EXPORTKEY)) {
			MiniData pubk = (MiniData)zMessage.getObject("publickey");
			
			//Get it..
			MiniData priv = getMainDB().getUserDB().getPubPrivKey(pubk).getPrivateSeed();
			
			SimpleLogger.log(priv.toString());
			
		}else if(zMessage.isMessageType(CONSENSUS_IMPORTKEY)) {
			MiniData priv = (MiniData)zMessage.getObject("privatekey");

			PubPrivKey newkey = new PubPrivKey(priv);
			
			if(getMainDB().getUserDB().getPubPrivKey(newkey.getPublicKey())!=null) {
				SimpleLogger.log("Key allready in DB!");
			}else {
				getMainDB().getUserDB().newSimpleAddress(newkey);
			}
		}
			
	}
}

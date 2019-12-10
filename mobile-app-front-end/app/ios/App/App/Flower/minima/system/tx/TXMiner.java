package Flower.minima.system.tx;

import java.util.Random;

import Flower.minima.objects.Difficulty;
import Flower.minima.objects.TxPOW;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.system.Main;
import Flower.minima.system.SystemHandler;
import Flower.minima.system.brains.ConsensusHandler;
import Flower.minima.utils.Crypto;
import Flower.minima.utils.SimpleLogger;
import Flower.minima.utils.messages.Message;

public class TXMiner extends SystemHandler{

	public static final int BASE_TXN 	= 0;
	public static final int BASE_BLOCK 	= 0;
	
	public static final String TXMINER_TESTHASHING = "MINE_TESTHASHING";
	
	public static final String TXMINER_MINETXPOW = "MINE_TXPOW";
	
	
	public TXMiner(Main zMain) {
		super(zMain,"TXMINER");
	}
	
	@Override
	protected void processMessage(Message zMessage) throws Exception {
		
		if(zMessage.isMessageType(TXMINER_MINETXPOW)) {
			//Get TXPOW..
			TxPOW txpow = (TxPOW) zMessage.getObject("txpow");
			
			//What is the minimum difficulty
			Difficulty txdiff 	= new Difficulty(txpow.getTxnDifficulty());
			
			//default nonce set to something..
			Random rand = new Random();
			MiniNumber nonce = new MiniNumber(""+rand.nextLong());
			
			//And now start hashing.. 
			MiniData32 hash 	= null;
			boolean mining 	= true;
			while(mining) {
				//Set the Nonce..
				txpow.setNonce(nonce);
				
				//Now Hash it..
				hash = Crypto.getInstance().hashObject(txpow);
				
				if(txdiff.isOK(hash)) {
					//For Now..
					mining = false;
				}
				
				//Increment the nonce..
				nonce = nonce.increment();
			}
			
			//Set the TxPOW
			txpow.calculateTXPOWID();
			
			//We have a valid TX-POW.. tell main
			Message msg = new Message(ConsensusHandler.CONSENSUS_PRE_PROCESSTXPOW).addObject("txpow", txpow);
			getMainHandler().getConsensusHandler().PostMessage(msg);
			
		}else if(zMessage.isMessageType(TXMINER_TESTHASHING)) {
			//See how many hashes this machine can do..
			long timenow = System.currentTimeMillis();
			
			byte[] data = new byte[32];
			
			SimpleLogger.log("Testing hashing on this machine.. please wait..");
			
			for(int i=0;i<10000000;i++){
				//Now Hash it..
				byte[] hash = Crypto.getInstance().hashData(data);
			}
			
			double diff = (double)(System.currentTimeMillis()-timenow) / (double)1000;
			
			SimpleLogger.log("Finished. 10,000,000 hashes took "+diff+" seconds");
			
			//Speed
			double speed =   ( 10000000 / diff ) / 1000000;
			SimpleLogger.log("Speed : "+speed+" MHashes/sec");
			
		}
		
	}

}

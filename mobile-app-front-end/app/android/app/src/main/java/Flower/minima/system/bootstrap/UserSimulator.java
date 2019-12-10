package Flower.minima.system.bootstrap;

import Flower.minima.objects.Transaction;
import Flower.minima.objects.Witness;
import Flower.minima.system.Main;
import Flower.minima.system.SystemHandler;
import Flower.minima.system.brains.ConsensusHandler;
import Flower.minima.utils.SimpleLogger;
import Flower.minima.utils.messages.Message;
import Flower.minima.utils.messages.TimerMessage;

public class UserSimulator extends SystemHandler {

	public boolean mMiningON 	= false;
	public int mCounter 		= 0;
	boolean mStressTest;
	
	boolean mPulseStarted = false;
	
	public UserSimulator(Main zMain) {
		super(zMain,"SIMULATOR");
		
		setLOG(false);
		
		//Start the process..
		PostTimerMessage(new TimerMessage(1000, "DO_WORK"));
		
		mLogON = false;
		mStressTest = false;
	}
	
	public void setMining(boolean zMining, int zCount, boolean zStress) {
		mMiningON 	= zMining;
		mCounter 	= zCount;
		mStressTest = zStress;
	}
	
	@Override
	protected void processMessage(Message zMessage) throws Exception {
		
		//Let this user send a message every 1 second..
		if(zMessage.isMessageType("DO_WORK")) {
			//Send it
			if(mMiningON) {
				if(!mPulseStarted) {
					mPulseStarted = true;
//					SimpleLogger.log("PULSE Started..");
				}
				
				Message mine = null;
				
				if(mStressTest) {
					//Send an sctual transaction over the network
					mine = new Message(ConsensusHandler.CONSENSUS_STRESS_TRANS);
					
				}else {
					//Create a blank transaction that will only be published if a block is found
					Transaction trans 	= new Transaction();
					Witness wit 		= new Witness();
					
					//Now send it..
					mine = new Message(ConsensusHandler.CONSENSUS_SENDTRANS)
											.addObject("transaction", trans)
											.addObject("witness", wit);
					
				}
					
				//Send it..
				getMainHandler().getConsensusHandler().PostMessage(mine);
			
				//Update the counter
				if(mCounter != -1) {
					mCounter--;
					if(mCounter<=0) {
						mMiningON = false;
					}
				}
			}
			
			//And again...
			PostTimerMessage(new TimerMessage(200, "DO_WORK"));
		}
	}

}

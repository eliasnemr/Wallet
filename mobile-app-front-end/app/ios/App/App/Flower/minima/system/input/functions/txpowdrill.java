package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusPrint;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txpowdrill extends CommandFunction {

	public txpowdrill() {
		super("txpow");
		
		setHelp("[ txpowid ]", "Return a specific TxPOW", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get the TxPOWID
		String TxPOWID = zInput[1];
		
		//Get the current balance of the user for all tokens..
		Message msg = getResponseMessage(ConsensusPrint.CONSENSUS_TXPOW);
		msg.addString("txpow", TxPOWID);
		
		//Post It..
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txpowdrill();
	}
}

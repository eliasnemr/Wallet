package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusPrint;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class coins extends CommandFunction {

	public coins() {
		super("coins");
		
		setHelp("", "Return a list of unspent coins", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get the current balance of the user for all tokens..
		Message msg = getResponseMessage(ConsensusPrint.CONSENSUS_COINS);
			
		//Post It..
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new coins();
	}
}

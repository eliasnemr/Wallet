package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusPrint;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class balance extends CommandFunction {

	public balance() {
		super("balance");
		
		setHelp("", "Return the current Minima balance", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get the current balance of the user for all tokens..
		Message msg = getResponseMessage(ConsensusPrint.CONSENSUS_BALANCE);
			
		//Post It..
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new balance();
	}
}

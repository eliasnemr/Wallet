package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusPrint;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class keys extends CommandFunction {

	public keys() {
		super("keys");
		
		setHelp("", "Return a list of all the addresses and public keys in this account", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get the current balance of the user for all tokens..
		Message msg = getResponseMessage(ConsensusPrint.CONSENSUS_KEYS);
			
		//Post It..
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new keys();
	}
}

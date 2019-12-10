package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusUser;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class newaddress extends CommandFunction{

	public newaddress() {
		super("newaddress");
		setHelp("", "Create a new address to receive funds", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get a response message
		Message msg = getResponseMessage(ConsensusUser.CONSENSUS_NEWSIMPLE);
		
		//Post a new Message
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new newaddress();
	}
}

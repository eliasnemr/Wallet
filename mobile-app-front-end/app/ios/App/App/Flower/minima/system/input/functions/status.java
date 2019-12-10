package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusPrint;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class status extends CommandFunction {

	public status() {
		super("status");
		
		setHelp("","Show the status of the Minima network", 
				"A complete view of the current state of the Minima network");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Must be run from the thread safe Consensus thread - to access the database
		getMainHandler().getConsensusHandler().PostMessage(getResponseMessage(ConsensusPrint.CONSENSUS_STATUS));
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new status();
	}
}

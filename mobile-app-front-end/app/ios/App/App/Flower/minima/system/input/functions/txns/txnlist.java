package Flower.minima.system.input.functions.txns;

import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txnlist extends CommandFunction {

	public txnlist() {
		super("txnlist");
		setHelp("", "List all current custom transactions", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		getMainHandler().getConsensusHandler().PostMessage(new Message(ConsensusTxn.CONSENSUS_TXNLIST));
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txnlist();
	}
}

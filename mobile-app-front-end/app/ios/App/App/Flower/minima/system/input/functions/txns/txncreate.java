package Flower.minima.system.input.functions.txns;

import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txncreate extends CommandFunction {

	public txncreate() {
		super("txncreate");
		setHelp("", "Create a new custom transaction", "");
	}

	@Override
	public void doFunction(String[] zInput) throws Exception {
		getMainHandler().getConsensusHandler().PostMessage(new Message(ConsensusTxn.CONSENSUS_TXNCREATE));
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txncreate();
	}
}

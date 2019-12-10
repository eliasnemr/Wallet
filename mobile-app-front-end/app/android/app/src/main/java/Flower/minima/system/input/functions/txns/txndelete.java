package Flower.minima.system.input.functions.txns;

import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txndelete extends CommandFunction{

	public txndelete() {
		super("txndelete");
		setHelp("[txn_num]", "Delete the custom transaction", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Which transaction
		int txn = Integer.parseInt(zInput[1]);
		
		//Send to the consensus Handler
		Message msg = new Message(ConsensusTxn.CONSENSUS_TXNDELETE);
		msg.addInt("transaction", txn);
	
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txndelete();
	}
}

package Flower.minima.system.input.functions.txns;

import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txnpost extends CommandFunction {

	public txnpost() {
		super("txnpost");
		setHelp("[txn_num]", "Post the transaction the the network", "");
	}

	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Which transaction
		int txn = Integer.parseInt(zInput[1]);
		
		//Send to the consensus Handler
		Message msg = new Message(ConsensusTxn.CONSENSUS_TXNPOST);
		msg.addInt("transaction", txn);
	
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txnpost();
	}
}

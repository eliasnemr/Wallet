package Flower.minima.system.input.functions.txns;

import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txnvalidate extends CommandFunction{

	public txnvalidate() {
		super("txnvalidate");
		setHelp("[txn_num]", "Check the validity (params scripts sigs) of the transaction", "");
	}

	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Which transaction
		int txn = Integer.parseInt(zInput[1]);
		
		//Send to the consensus Handler
		Message msg = new Message(ConsensusTxn.CONSENSUS_TXNVALIDATE);
		msg.addInt("transaction", txn);
	
		getMainHandler().getConsensusHandler().PostMessage(msg);		
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txnvalidate();
	}
}

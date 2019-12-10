package Flower.minima.system.input.functions.txns;

import Flower.minima.objects.Address;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txnoutput extends CommandFunction {

	public txnoutput() {
		super("txnoutput");
		setHelp("[txn_num] [amount] [address] {tokenID}", "Add an output to the specified transaction", "");
	}

	@Override
	public void doFunction(String[] zInput) throws Exception {

		int txn = Integer.parseInt(zInput[1]);
		String value = zInput[2];

		//Check value..
		MiniNumber number = new MiniNumber(value);
		if(number.isLess(MiniNumber.ZERO)) {
			System.out.println("Cannot have NEGATIVE outputs..");
			return;
		}
		
		String address = zInput[3];
		Address addr = new Address(new MiniData32(address));

		// is there a TokenID
		String tokenid = "0x00";
		if (zInput.length > 4) {
			tokenid = zInput[4];
		}

		// Send to the consensus Handler
		Message msg = new Message(ConsensusTxn.CONSENSUS_TXNOUTPUT);
		msg.addInt("transaction", txn);
		msg.addString("value", value);
		msg.addObject("address", addr);
		msg.addString("tokenid", tokenid);

		getMainHandler().getConsensusHandler().PostMessage(msg);
	}
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txnoutput();
	}
}

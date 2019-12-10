package Flower.minima.system.input.functions.txns;

import Flower.minima.objects.base.MiniData32;
import Flower.minima.system.brains.ConsensusTxn;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class txninput extends CommandFunction {

	public txninput() {
		super("txninput");
		setHelp("[txn_num] [coinID] {params}", "Add a specific Coin as an input to the specified transaction", "");
	}

	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get the Txn
		int txn = Integer.parseInt(zInput[1]);
		
		//Get the coinid of the input
		String coinid = zInput[2];
		MiniData32 cid = new MiniData32(coinid);
		
		//Are there params..
		String params = "";
		if(zInput.length>3) {
			params = zInput[3];
		}
				
		//Send to the consensus Handler
		Message msg = new Message(ConsensusTxn.CONSENSUS_TXNINPUT);
		msg.addInt("transaction", txn);
		msg.addObject("coinid", cid);
		msg.addString("params", params);
		
		getMainHandler().getConsensusHandler().PostMessage(msg);
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new txninput();
	}
}

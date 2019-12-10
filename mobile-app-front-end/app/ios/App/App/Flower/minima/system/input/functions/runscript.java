package Flower.minima.system.input.functions;

import Flower.minima.system.brains.ConsensusUser;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class runscript extends CommandFunction{

	public runscript() {
		super("runscript");
		
		setHelp("[script] {params} {sigs}", "Run the specified script with the specified comma separted parameters. Use \"\" if empty.", 
				"runscript \"RETURN $1 == 2\" \"2,3,0xff\" \"\"  .. which is FALSE as $1 == 3");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//get the Contract
		String script = zInput[1];
		String params = "";
		String sigs   = "";
		
		if(zInput.length>2) {
			params = zInput[2];
		}

		if(zInput.length>3) {
			sigs   = zInput[3];
		}
		
		//Create a message
		Message rscript = new Message(ConsensusUser.CONSENSUS_RUNSCRIPT);
		rscript.addString("script", script);
		rscript.addString("params", params);
		rscript.addString("sigs", sigs);
		
		getMainHandler().getConsensusHandler().PostMessage(rscript);
	}
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new runscript();
	}
}

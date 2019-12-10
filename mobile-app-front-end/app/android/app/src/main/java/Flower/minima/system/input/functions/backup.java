package Flower.minima.system.input.functions;

import Flower.json.simple.JSONObject;
import Flower.minima.system.brains.ConsensusBackup;
import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.messages.Message;

public class backup extends CommandFunction{

	public backup() {
		super("backup");
		setHelp("", "Backup the current User details (done automatically when you quit)", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		//Get a response message
		Message msg = getResponseMessage(ConsensusBackup.CONSENSUSBACKUP_BACKUP);
		
		//Send a backup message - with no request to shutdown at the end..
		getMainHandler().getConsensusHandler().PostMessage(msg);
		
		getResponseStream().endStatus(true, "");
	}
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new backup();
	}

}

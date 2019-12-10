package Flower.minima.system.input.functions;

import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.SimpleLogger;

public class intro extends CommandFunction{

	public intro() {
		super("intro");
	}
	
	@Override
	public void doFunction(String[] zInput)  {
		SimpleLogger.log("Welcome to Minima. For assistance type help. Then press enter.");
	}

	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new intro();
	}
}

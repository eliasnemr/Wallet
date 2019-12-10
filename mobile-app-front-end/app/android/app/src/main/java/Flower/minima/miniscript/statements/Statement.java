package Flower.minima.miniscript.statements;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;

public interface Statement {
	/**
	 * Execute the Statement in the given Contract Environment
	 * 
	 * @param zContract
	 * @return The block of code to execute or null
	 */
	public void execute(Contract zContract) throws ExecutionException;
}

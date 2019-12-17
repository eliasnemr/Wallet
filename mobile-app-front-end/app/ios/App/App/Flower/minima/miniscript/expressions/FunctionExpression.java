/**
 * 
 */
package Flower.minima.miniscript.expressions;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.values.Value;

/**
 * @author Spartacus Rex
 *
 */
public class FunctionExpression implements Expression {
	
	MinimaFunction mFunction;
	
	/**
	 * Create the Function Expression 
	 */
	public FunctionExpression(MinimaFunction zFunction) {
		//Store for later
		mFunction = zFunction;
	}
	
	@Override
	public Value getValue(Contract zContract) throws ExecutionException {
		//This action counts as one instruction
		zContract.countInstructions();
				
		return mFunction.runFunction(zContract);
	}
	
	@Override
	public String toString() {
		return "function:"+mFunction.getName()+", params:"+mFunction.getAllParameters();
	}
}

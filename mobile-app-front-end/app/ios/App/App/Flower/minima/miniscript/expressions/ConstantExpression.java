/**
 * 
 */
package Flower.minima.miniscript.expressions;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.values.Value;

/**
 * @author Spartacus Rex
 *
 */
public class ConstantExpression implements Expression{

	private Value mValue;
	
	public ConstantExpression(Value zValue) {
		mValue = zValue;
	}
	
	@Override
	public Value getValue(Contract zContract) throws ExecutionException {
		return mValue;
	}
	
	@Override
	public String toString() {
		return mValue.toString();
	}
}

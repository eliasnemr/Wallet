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
public class VariableExpression implements Expression {

	String mVariableName;
	
	public VariableExpression(String zName) {
		super();
		
		//Store the name
		mVariableName = zName;
	}

	@Override
	public Value getValue(Contract zContract) throws ExecutionException {
		return zContract.getVariable(mVariableName);
	}
	
	@Override
	public String toString() {
		return "variable:"+mVariableName;
	}
}



/**
 * 
 */
package Flower.minima.miniscript.statements.commands;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.expressions.Expression;
import Flower.minima.miniscript.statements.Statement;
import Flower.minima.miniscript.values.Value;

/**
 * @author Spartacus Rex
 *
 */
public class LETstatement implements Statement{

	String 		mName;
	Expression 	mValue;
	
	public LETstatement(String zVariableName, Expression zExpression) {
		mName  = zVariableName;
		mValue = zExpression; 
	}
	
	@Override
	public void execute(Contract zContract)  throws ExecutionException {
		//Trace log
		zContract.traceLog(toString());
		
		//Do it..
		zContract.setVariable(mName, mValue.getValue(zContract));
	}
	
	@Override
	public String toString() {
		return "LET "+mName+" = "+mValue;
	}
}

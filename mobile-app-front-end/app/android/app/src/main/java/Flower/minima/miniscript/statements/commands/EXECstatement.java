package Flower.minima.miniscript.statements.commands;

import java.util.List;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.expressions.Expression;
import Flower.minima.miniscript.statements.Statement;
import Flower.minima.miniscript.statements.StatementBlock;
import Flower.minima.miniscript.statements.StatementParser;
import Flower.minima.miniscript.tokens.Token;
import Flower.minima.miniscript.values.ScriptValue;

/**
 * EXEC SCRIPT
 * 
 * @author spartacusrex
 *
 */
public class EXECstatement implements Statement{

	Expression mScript;
	
	public EXECstatement(Expression zScript) {
		mScript = zScript;
	}
	
	@Override
	public void execute(Contract zContract) throws ExecutionException {
		//get the Script..
		ScriptValue script = (ScriptValue) mScript.getValue(zContract);
		
		try {
			//Convert the script to MINIVM!
			List<Token> tokens = Token.tokenize(script.toString());	
		
			//And now convert to a statement block..
			StatementBlock mBlock = StatementParser.parseTokens(tokens);

			//Trace log
			zContract.traceLog("EXEC [ "+script.toString()+" ]");
			
			//Now run it..
			mBlock.run(zContract);
			
		}catch(Exception exc) {
			throw new ExecutionException(exc.toString());			
		}
	}
	
	@Override
	public String toString() {
		return "EXEC "+mScript;
	}

}

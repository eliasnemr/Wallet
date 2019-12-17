/**
 * 
 */
package Flower.minima.miniscript.functions;

import java.util.ArrayList;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.exceptions.MinimaParseException;
import Flower.minima.miniscript.expressions.Expression;
import Flower.minima.miniscript.functions.base.CONCAT;
import Flower.minima.miniscript.functions.base.LEN;
import Flower.minima.miniscript.functions.base.REV;
import Flower.minima.miniscript.functions.base.RPLVAR;
import Flower.minima.miniscript.functions.base.SUBSET;
import Flower.minima.miniscript.functions.cast.ASCII;
import Flower.minima.miniscript.functions.cast.BOOL;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.functions.cast.NUMBER;
import Flower.minima.miniscript.functions.cast.SCRIPT;
import Flower.minima.miniscript.functions.maths.ABS;
import Flower.minima.miniscript.functions.maths.BITGET;
import Flower.minima.miniscript.functions.maths.BITSET;
import Flower.minima.miniscript.functions.maths.CEIL;
import Flower.minima.miniscript.functions.maths.DEC;
import Flower.minima.miniscript.functions.maths.FLOOR;
import Flower.minima.miniscript.functions.maths.INC;
import Flower.minima.miniscript.functions.maths.MAX;
import Flower.minima.miniscript.functions.maths.MIN;
import Flower.minima.miniscript.functions.sha.CHAINSHA;
import Flower.minima.miniscript.functions.sha.SHA2;
import Flower.minima.miniscript.functions.sha.SHA3;
import Flower.minima.miniscript.functions.sigs.CHECKSIG;
import Flower.minima.miniscript.functions.sigs.MULTISIG;
import Flower.minima.miniscript.functions.sigs.SIGNEDBY;
import Flower.minima.miniscript.functions.txn.output.GETOUTADDR;
import Flower.minima.miniscript.functions.txn.output.GETOUTAMT;
import Flower.minima.miniscript.functions.txn.output.GETOUTTOK;
import Flower.minima.miniscript.functions.txn.output.VERIFYOUT;
import Flower.minima.miniscript.values.Value;
import Flower.minima.system.input.functions.newaddress;

/**
 * @author Spartacus Rex
 *
 */
public abstract class MinimaFunction {
	
	/**
	 * A list of all the available functions
	 */
	public static MinimaFunction[] ALL_FUNCTIONS = 
			{ 
				new CONCAT(), new LEN(), new RPLVAR(),new REV(),new SUBSET(), 
				new BOOL(), new NUMBER(), new HEX(), new SCRIPT(), new ASCII(),
				new ABS(), new CEIL(), new FLOOR(),new MAX(), new MIN(), new DEC(), new INC(),
				new SHA3(), new SHA2(), new CHAINSHA(), new BITSET(), new BITGET(), 
				new SIGNEDBY(), new MULTISIG(), new CHECKSIG(),
				new GETOUTADDR(), new GETOUTAMT(), new GETOUTTOK(),new VERIFYOUT()
			};
	
	/**
	 * The name used to refer to this function in RamScript. 
	 */
	private String mName;
	
	/**
	 * The Parameters
	 */
	ArrayList<Expression> mParameters;
	
	/**
	 * 
	 */
	public MinimaFunction(String zName) {
		//Function names are always Uppercase
		mName = zName.toUpperCase();
		
		//Blank the parameters
		mParameters = new ArrayList<>();
	}
	
	public void addParameter(Expression zParam) {
		mParameters.add(zParam);
	}
	
	public Expression getParameter(int zParamNum) throws ExecutionException {
		if(zParamNum>=getParameterNum()) {
			throw new ExecutionException("Parameter missing for "+getName()+" num:"+zParamNum);
		}
		return mParameters.get(zParamNum);
	}
	
	public int getParameterNum(){
		return mParameters.size();
	}
	
	public ArrayList<Expression> getAllParameters(){
		return mParameters;
	}
	
	public String getName() {
		return mName;
	}
	
	/**
	 * Run it. And return a Value. 
	 * @return
	 */
	public abstract Value runFunction(Contract zContract) throws ExecutionException;

	/**
	 * Return a new copy of this function
	 * @return
	 */
	public abstract MinimaFunction getNewFunction();

	/**
	 * Get a specific function given it's name
	 * 
	 * @param zFunction
	 * @return the Function
	 * @throws MinimaParseException
	 */
	public static MinimaFunction getFunction(String zFunction) throws MinimaParseException{
		//Cycle through all the functions - find the right one..
		for(MinimaFunction func : MinimaFunction.ALL_FUNCTIONS) {
			//Check it..
			if(func.getName().equalsIgnoreCase(zFunction)) {
				return func.getNewFunction();
			}
		}
		
		throw new MinimaParseException("Invalid Function : "+zFunction);
	}
	
}

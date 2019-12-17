package Flower.minima.miniscript.functions.cast;

import java.nio.charset.Charset;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.base.RPLVAR;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.ScriptValue;
import Flower.minima.miniscript.values.Value;

/**
 * Convert a HEXVALUE of ASCII text to a script value 
 * @author spartacusrex
 *
 */
public class ASCII extends MinimaFunction{

	public ASCII() {
		super("ASCII");
	}

	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//Get the ASCII
		HEXValue ascii = (HEXValue) getParameter(0).getValue(zContract);
		
		//Create a string
		String script = new String(ascii.getRawData(),Charset.forName("US-ASCII"));
		
		return new ScriptValue(script);
	}
	
	@Override
	public MinimaFunction getNewFunction() {
		return new ASCII();
	}

}

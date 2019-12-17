package Flower.minima.miniscript.functions.cast;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.base.RPLVAR;
import Flower.minima.miniscript.values.NumberValue;
import Flower.minima.miniscript.values.Value;

/**
 * Convert a HEXValue to a NUMBERVALUE
 * 
 * @author spartacusrex
 *
 */
public class NUMBER extends MinimaFunction{

	public NUMBER() {
		super("NUMBER");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//Get the Value..
		Value hex = getParameter(0).getValue(zContract);
		
		//Create a Number Value
		NumberValue num = new NumberValue(hex.getNumber());
		
		// TODO Auto-generated method stub
		return num;
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new NUMBER();
	}
}

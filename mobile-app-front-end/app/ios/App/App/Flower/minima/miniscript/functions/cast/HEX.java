package Flower.minima.miniscript.functions.cast;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.base.RPLVAR;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.Value;

public class HEX extends MinimaFunction{

	public HEX() {
		super("HEX");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//Get the Value..
		Value val = getParameter(0).getValue(zContract);
		
		//Create a Number Value
		HEXValue hex = new HEXValue(val.getMiniData());
		
		// TODO Auto-generated method stub
		return hex;
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new HEX();
	}
}

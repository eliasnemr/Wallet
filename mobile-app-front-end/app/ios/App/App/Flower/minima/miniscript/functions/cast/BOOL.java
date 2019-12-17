package Flower.minima.miniscript.functions.cast;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.base.RPLVAR;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.Value;

public class BOOL extends MinimaFunction {

	public BOOL() {
		super("BOOL");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//Get the Value..
		Value val = getParameter(0).getValue(zContract);
		
		// TODO Auto-generated method stub
		return new BooleanValue(val.isTrue());
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new BOOL();
	}
}

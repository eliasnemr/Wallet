package Flower.minima.miniscript.functions.base;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.values.NumberValue;
import Flower.minima.miniscript.values.Value;

public class LEN extends MinimaFunction{

	public LEN() {
		super("LEN");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//The Data
		Value hex = getParameter(0).getValue(zContract);
		
		//The Length
		int len = hex.getRawData().length;
		
		return new NumberValue(len);
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new LEN();
	}
}

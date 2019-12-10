package Flower.minima.miniscript.functions.sigs;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.Value;

public class SIGNEDBY extends MinimaFunction{

	public SIGNEDBY() {
		super("SIGNEDBY");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//get the Pub Key
		Value pubkey = getParameter(0).getValue(zContract);
		
		//Check it..
		boolean valid = zContract.checkSignature(pubkey);
		
		//return value
		return new BooleanValue(valid);
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new SIGNEDBY();
	}
}

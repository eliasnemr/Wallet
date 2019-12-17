package Flower.minima.miniscript.functions.base;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.Value;

public class REV extends MinimaFunction {

	public REV() {
		super("REV");
	}	
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//get the bytes..
		byte[] array  = getParameter(0).getValue(zContract).getRawData();
		
		//Lengths
		int datalen   = array.length;
		
		//Create the reverse buffer
		byte[] revdata = new byte[datalen];
		
		//Reverse..
		for(int i=0;i<datalen; i++){
			revdata[i] = array[array.length -i -1];
		}
		
		// Return reversed value
		return new HEXValue(revdata);
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new REV();
	}
}

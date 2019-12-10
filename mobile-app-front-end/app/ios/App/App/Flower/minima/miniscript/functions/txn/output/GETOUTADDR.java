package Flower.minima.miniscript.functions.txn.output;

import java.util.ArrayList;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.Value;
import Flower.minima.objects.Coin;
import Flower.minima.objects.Transaction;

public class GETOUTADDR extends MinimaFunction {

	public GETOUTADDR() {
		super("GETOUTADDR");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		
		//Which Output - must be from 0-255
		int output = getParameter(0).getValue(zContract).getNumber().getAsInt();
		
		//Get the Transaction
		Transaction trans = zContract.getTransaction();
		
		//Check output exists..
		ArrayList<Coin> outs = trans.getAllOutputs();
		if(outs.size()<=output) {
			throw new ExecutionException("Output number too high "+output+"/"+outs.size());
		}
		
		//Get it..
		Coin cc = outs.get(output);
		
		//Return the address	
		return new HEXValue(cc.getAddress());
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new GETOUTADDR();
	}
}

package Flower.minima.miniscript.functions.txn.output;

import java.util.ArrayList;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.NumberValue;
import Flower.minima.miniscript.values.Value;
import Flower.minima.objects.Coin;
import Flower.minima.objects.Transaction;
import Flower.minima.utils.SimpleLogger;

/**
 * Verify that the specified output exists in the transaction.
 * @author spartacusrex
 *
 */
public class VERIFYOUT extends MinimaFunction{

	public VERIFYOUT() {
		super("VERIFYOUT");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		
		//Which Output
		int output    = getParameter(0).getValue(zContract).getNumber().getAsInt();
		
		//Get the details
		Value address = getParameter(1).getValue(zContract);
		Value amount  = getParameter(2).getValue(zContract);
		Value tokenid = getParameter(3).getValue(zContract);
		
		//Check an output exists..
		Transaction trans = zContract.getTransaction();
	
		//Check output exists..
		ArrayList<Coin> outs = trans.getAllOutputs();
		if(outs.size()<=output) {
			throw new ExecutionException("Output number too high "+output+"/"+outs.size());
		}
		
		//Get it..
		Coin cc = outs.get(output);
		
		//Now Check
		boolean addr = address.getMiniData().isExactlyEqual(cc.getAddress());  
		boolean amt  = amount.getNumber().isEqual(cc.getAmount());  
		boolean tok  = tokenid.getMiniData().isExactlyEqual(cc.getTokenID());  
		
		//Return if all true
		return new BooleanValue( addr && amt && tok );
	}
	
	@Override
	public MinimaFunction getNewFunction() {
		return new VERIFYOUT();
	}

}

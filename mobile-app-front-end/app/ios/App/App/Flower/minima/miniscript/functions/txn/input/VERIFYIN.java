package Flower.minima.miniscript.functions.txn.input;

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
public class VERIFYIN extends MinimaFunction{

	public VERIFYIN() {
		super("VERIFYIN");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		
		//Which Output
		int input     = getParameter(0).getValue(zContract).getNumber().getAsInt();
		
		//Get the details
		Value address = getParameter(1).getValue(zContract);
		Value amount  = getParameter(2).getValue(zContract);
		Value tokenid = getParameter(3).getValue(zContract);
		
		//Check an output exists..
		Transaction trans = zContract.getTransaction();
	
		//Check output exists..
		ArrayList<Coin> ins = trans.getAllInputs();
		if(ins.size()<=input) {
			throw new ExecutionException("Input number too high "+input+"/"+ins.size());
		}
		
		//Get it..
		Coin cc = ins.get(input);
		
		//Now Check
		boolean addr = address.getMiniData().isExactlyEqual(cc.getAddress());  
		boolean amt  = amount.getNumber().isEqual(cc.getAmount());  
		boolean tok  = tokenid.getMiniData().isExactlyEqual(cc.getTokenID());  
		
		//Return if all true
		return new BooleanValue( addr && amt && tok );
	}
	
	@Override
	public MinimaFunction getNewFunction() {
		return new VERIFYIN();
	}

}

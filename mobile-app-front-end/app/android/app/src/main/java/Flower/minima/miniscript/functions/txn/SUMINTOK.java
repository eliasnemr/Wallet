package Flower.minima.miniscript.functions.txn;

import java.util.ArrayList;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.txn.input.VERIFYIN;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.NumberValue;
import Flower.minima.miniscript.values.Value;
import Flower.minima.objects.Coin;
import Flower.minima.objects.Transaction;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;

public class SUMINTOK  extends MinimaFunction{

	public SUMINTOK() {
		super("SUMINTOK");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		//Which token to check for
		MiniData32 token = new MiniData32(getParameter(0).getValue(zContract).getRawData()); 
		
		//Check an output exists..
		Transaction trans = zContract.getTransaction();
	
		//Check output exists..
		ArrayList<Coin> ins = trans.getAllInputs();
		
		//Cycle
		MiniNumber total = MiniNumber.ZERO;
		for(Coin cc : ins) {
			//Check is the correct Token..
			if(cc.getTokenID().isExactlyEqual(token)) {
				total = total.add(cc.getAmount());
			}
		}
		
		//Return if all true
		return new NumberValue( total );
	}
	
	@Override
	public MinimaFunction getNewFunction() {
		return new SUMINTOK();
	}
}
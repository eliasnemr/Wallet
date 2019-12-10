package Flower.minima.miniscript.functions.sigs;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.Value;

public class MULTISIG extends MinimaFunction {

	public MULTISIG() {
		super("MULTISIG");
	}

	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		
		//How many required.. 
		int num = getParameter(0).getValue(zContract).getNumber().getAsInt();
		
		//How many to check from
		int tot= getParameterNum()-1;
		
		//Cycle..
		int found =0;
		for(int i=0;i<tot;i++) {
			Value sig = getParameter(1+i).getValue(zContract);
		
			if(zContract.checkSignature(sig)) {
				found++;
			}
		}
		
		if(found >= num) {
			return BooleanValue.TRUE;
		}else {
			return BooleanValue.FALSE;
		}
	}

	@Override
	public MinimaFunction getNewFunction() {
		return new MULTISIG();
	}
}

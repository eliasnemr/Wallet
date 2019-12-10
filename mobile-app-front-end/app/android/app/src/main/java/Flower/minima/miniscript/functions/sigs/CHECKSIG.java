package Flower.minima.miniscript.functions.sigs;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.functions.cast.HEX;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.Value;
import Flower.minima.objects.PubPrivKey;
import Flower.minima.objects.base.MiniData32;

/**
 * for now only retur  true..
 * 
 * @author spartacusrex
 *
 */
public class CHECKSIG extends MinimaFunction {

	public CHECKSIG() {
		super("CHECKSIG");
	}
	
	@Override
	public Value runFunction(Contract zContract) throws ExecutionException {
		
		//Get the Pbkey
		HEXValue pubkey = (HEXValue) getParameter(0).getValue(zContract);
		
		//get the data
		HEXValue data   = (HEXValue) getParameter(1).getValue(zContract);
		
		//Get the signature
		HEXValue sig    = (HEXValue) getParameter(2).getValue(zContract);
		
		//Check it..
		boolean ok = PubPrivKey.verify(pubkey.getMiniData(), new MiniData32(data.getRawData()), sig.getMiniData());
		
		// TODO Auto-generated method stub
		return new BooleanValue(ok);
	}
	
	@Override
	public MinimaFunction getNewFunction() {
		return new CHECKSIG();
	}

}

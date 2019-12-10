package Flower.minima.miniscript.expressions;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.values.Value;

public class GlobalExpression implements Expression {

	/**
	 * Current Block Number
	 */
	public static final int GLOBAL_BLOCKNUM 	= 0;
	
	/**
	 * Current Block Hash
	 */
	public static final int GLOBAL_BLOCKHASH 	= 1;
	
	/**
	 * Input number of Transaction
	 */
	public static final int GLOBAL_INPUT 	= 2;
	
	/**
	 * Amount of the input
	 */
	public static final int GLOBAL_AMOUNT 	= 3;
	
	/**
	 * Token Amount of the input
	 */
	public static final int GLOBAL_TOKAMOUNT 	= 4;
	
	/**
	 * Address of the input
	 */
	public static final int GLOBAL_ADDRESS 	= 5;
	
	/**
	 * TokenID of the input
	 */
	public static final int GLOBAL_TOKENID 	= 6;
	
	/**
	 * CoinID of the input
	 */
	public static final int GLOBAL_COINID 	= 7;
	
	/**
	 * Script of the input
	 */
	public static final int GLOBAL_SCRIPT 	= 8;
	
	/**
	 * Total number of inputs
	 */
	public static final int GLOBAL_TOTIN 	= 9;
	
	/**
	 * Total number of outputs
	 */
	public static final int GLOBAL_TOTOUT 	= 10;
	
	
	/**
	 * What type of Global id this
	 */
	int mGlobalType;

	/**
	 * Main Constructor
	 * 
	 * @param zType
	 */
	public GlobalExpression(int zType) {
		mGlobalType = zType;
	}
	
	@Override
	public Value getValue(Contract zContract) throws ExecutionException {
		return zContract.getGlobal(mGlobalType);
	}

	@Override
	public String toString() {
		return "global:"+mGlobalType;
	}
}

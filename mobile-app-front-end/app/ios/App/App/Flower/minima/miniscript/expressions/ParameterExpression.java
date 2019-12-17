package Flower.minima.miniscript.expressions;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.values.Value;

public class ParameterExpression implements Expression {

	int mParamNum;
	
	public ParameterExpression(int zParamNum) {
		mParamNum = zParamNum;
	}
	
	@Override
	public Value getValue(Contract zContract) throws ExecutionException {
		return zContract.getParameter(mParamNum);
	}
	
	@Override
	public String toString() {
		return "param:"+mParamNum;
	}
}

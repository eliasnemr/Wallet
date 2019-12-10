/**
 * 
 */
package Flower.minima.miniscript.expressions;

import Flower.minima.miniscript.Contract;
import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.values.Value;

/**
 * @author Spartacus Rex
 *
 */
public interface Expression {
	public Value getValue(Contract zContract) throws ExecutionException;
}

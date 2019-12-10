package Flower.minima.objects;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Hashtable;

import Flower.json.simple.JSONArray;
import Flower.json.simple.JSONObject;
import Flower.minima.objects.base.MiniByte;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Streamable;

/**
 * A transaction is a very simple structure. A list of inputs and a list of outputs. 
 * All the Witness data is Segregated..  So that there is no TXN malleability possible.
 * The CoinID of an output is the HASH ( TXN hash + Output Num ), which is ALWAYS Globally Unique.
 * 
 * @author spartacus
 *
 */
public class Transaction implements Streamable {

	/**
	 * The Inputs that make up the Transaction
	 */
	ArrayList<Coin> mInputs  = new ArrayList<>();
	
	/**
	 * All the Outputs
	 */
	ArrayList<Coin> mOutputs = new ArrayList<>();
	
	/**
	 * The State values of the Transaction
	 */
	Hashtable<MiniByte, String> mState = new Hashtable<>();
	
	/**
	 * Constructor
	 */
	public Transaction() {}
	
	public void addInput(Coin zCoin) {
		mInputs.add(zCoin);
	}
	
	public boolean isEmpty() {
		return mInputs.size() == 0 && mOutputs.size() == 0;
	}
	
	public void addOutput(Coin zCoin) {
		mOutputs.add(zCoin);
	}
	
	public ArrayList<Coin> getAllInputs(){
		return mInputs;
	}
	
	public ArrayList<Coin> getAllOutputs(){
		return mOutputs;
	}
	
	public MiniNumber sumInputs() {
		MiniNumber tot = new MiniNumber();
		for(Coin cc : mInputs) {
			tot = tot.add(cc.mAmount);
		}
		return tot;
	}
	
	public MiniNumber sumOutputs() {
		MiniNumber tot = new MiniNumber();
		for(Coin cc : mOutputs) {
			tot = tot.add(cc.mAmount);
		}
		return tot;
	}

	/**
	 * Set a state value from 0-255 to a certain value
	 * @param zStateNum
	 * @param zValue
	 */
	public void setStateValue(int zStateNum, String zValue) {
		mState.put(new MiniByte(zStateNum), zValue);
	}
	
	/**
	 * Get a state value from 0-255
	 * @param zStateNum
	 * @return
	 */
	public String getStateValue(int zStateNum) {
		return mState.get(new MiniByte(zStateNum));
	}
	
	@Override
	public String toString() {
		return toJSON().toString();
	}
	
	public JSONObject toJSON() {
		JSONObject ret = new JSONObject();
		
		//Inputs
		JSONArray ins = new JSONArray();
		for(Coin in : mInputs) {
			ins.add(in.toJSON());
		}
		ret.put("inputs", ins);
		
		//Outputs
		JSONArray outs = new JSONArray();
		for(Coin out : mOutputs) {
			outs.add(out.toJSON());
		}
		ret.put("outputs", outs);
		
//		//State
//		JSONArray stats = new JSONArray();
//		Enumeration<MiniByte> kenum = mState.keys();
//		while(kenum.hasMoreElements()) {
//			//Get the Key
//			MiniByte key = kenum.nextElement();
//			
//			//Get the Data
//			String value = mState.get(key);
//			
//			//And output
//			
//		}
		
		return ret;
	}

	@Override
	public void writeDataStream(DataOutputStream zOut) throws IOException {
		//Max 255 inputs or outputs
		MiniByte ins = new MiniByte(mInputs.size());

		//Write it out..
		ins.writeDataStream(zOut);
		
		//Now the coins
		for(Coin coin : mInputs) {
			coin.writeDataStream(zOut);
		}
		
		//Max 255 inputs or outputs
		MiniByte outs = new MiniByte(mOutputs.size());

		//Write it out..
		outs.writeDataStream(zOut);
		
		//Now the coins
		for(Coin coin : mOutputs) {
			coin.writeDataStream(zOut);
		}
	}

	@Override
	public void readDataStream(DataInputStream zIn) throws IOException {
		mInputs  = new ArrayList<>();
		mOutputs = new ArrayList<>();
		
		//Inputs
		MiniByte ins = new MiniByte();
		ins.readDataStream(zIn);
		
		int len = ins.getValue();
		for(int i=0;i<len;i++) {
			Coin coin = Coin.ReadFromStream(zIn);
			mInputs.add(coin);
		}
		
		//Outputs
		MiniByte outs = new MiniByte();
		outs.readDataStream(zIn);
		
		len = outs.getValue();
		for(int i=0;i<len;i++) {
			Coin coin = Coin.ReadFromStream(zIn);
			mOutputs.add(coin);
		}
	}
}

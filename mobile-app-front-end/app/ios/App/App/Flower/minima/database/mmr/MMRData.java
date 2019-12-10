package Flower.minima.database.mmr;

import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

import Flower.json.simple.JSONObject;
import Flower.minima.objects.Coin;
import Flower.minima.objects.base.MiniByte;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Crypto;
import Flower.minima.utils.Streamable;

public class MMRData implements Streamable{
	
	/**
	 * Spent or Unspent
	 */
	MiniByte   mSpent;

	/**
	 * The Coin
	 */
	Coin mCoin;
	
	/**
	 * Extra data that is provided in the proof and available to the script
	 */
	
	/**
	 * The Blocknumber that this output was created in if UNSPENT - OP_CSV - OR spent if spent
	 */
	MiniNumber mOutputBlockNumber;
	
	/**
	 * The hash of the block this was added to.. can be used as random data
	 */
	MiniData32 mBlockHash;
	
	/**
	 * The final Hash this represents in the MMR tree
	 */
	MiniData32 mFinalHash;
	
	/**
	 * Is this a HASH only affair
	 */
	boolean mHashOnly;
	
	/**
	 * Internal
	 */
	private MMRData() {}
	
	/**
	 * For Internal Nodes.. just the hash
	 * 
	 * @param zData
	 */
	public MMRData(MiniData32 zData) {
		mFinalHash = zData;
		mHashOnly  = true;
	}
	
	/**
	 * Create an Unspent MMRDATA coin from a coin
	 * @param zOutput
	 */
	public MMRData(MiniByte zSpent, Coin zCoin) {
		mSpent = zSpent;
		
		mCoin = zCoin;
		
		calculateDataHash();
		
		mHashOnly = false;
	}
	
	private void calculateDataHash() {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		DataOutputStream dos = new DataOutputStream(baos);
		
		try {
			//Write out the data..
			writeDataStream(dos);
			
			//Flush
			dos.flush();
			baos.flush();
			
			//Get the data
			MiniData data = new MiniData( baos.toByteArray() );
			
			//And Hash IT..
			mFinalHash = Crypto.getInstance().hashObject(data);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public MiniData32 getFinalHash() {
		return mFinalHash;
	}
	
	public boolean isSpent() {
		return mSpent.isEqual(MiniByte.TRUE);
	}
	
	public Coin getCoin() {
		return mCoin;
	}
	
	public boolean isHashOnly() {
		return mHashOnly;
	}
	
	public JSONObject toJSON() {
		JSONObject obj = new JSONObject();
		
		obj.put("hashonly", mHashOnly);
		
		if(mHashOnly) {
			obj.put("finalhash", mFinalHash);	
		}else {
			obj.put("finalhash", mFinalHash);
			obj.put("spent", isSpent());
			obj.put("coin", mCoin);
		}
		
		return obj;
	}
	
	@Override
	public String toString() {
		return toJSON().toString();
	}

	@Override
	public void writeDataStream(DataOutputStream zOut) throws IOException {
		//Is it full or partial..
		if(mHashOnly) {
			MiniByte.TRUE.writeDataStream(zOut);
			
			//Only write the hash
			mFinalHash.writeDataStream(zOut);
		
		}else {
			MiniByte.FALSE.writeDataStream(zOut);
		
			//Write out the data..
			mSpent.writeDataStream(zOut);
			mCoin.writeDataStream(zOut);
		}
	}

	@Override
	public void readDataStream(DataInputStream zIn) throws IOException {
		//Full or Partial
		MiniByte hashonly = MiniByte.ReadFromStream(zIn);
		mHashOnly         = hashonly.isTrue();
		
		if(mHashOnly) {
			mFinalHash = MiniData32.ReadFromStream(zIn);
		}else {
			mSpent   = MiniByte.ReadFromStream(zIn);
			mCoin    = Coin.ReadFromStream(zIn);
			
			//Calculate the Hash..
			calculateDataHash();
		}
	}
	
	public static MMRData ReadFromStream(DataInputStream zIn){
		MMRData data = new MMRData();
		
		try {
			data.readDataStream(zIn);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
		
		return data;
		
	}
}

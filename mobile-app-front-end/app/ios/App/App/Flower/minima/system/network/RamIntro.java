package Flower.minima.system.network;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import Flower.minima.objects.TxPOW;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Streamable;

public class RamIntro implements Streamable{

	/**
	 * What version of the network are you running
	 */
	MiniNumber mNetworkChatVersion = new MiniNumber("0");
	
	/**
	 * Complete chain header list..
	 */
	ArrayList<TxPOW> mCompleteChain;
	
	/**
	 * 
	 */
	long mCascader = 0;
	
	
	/**
	 * Constructor
	 */
	public RamIntro() {
		mCompleteChain = new ArrayList<>();
	}

	/**
	 * Get the chain array. Fill this.
	 * @return
	 */
	public ArrayList<TxPOW> getChainArray() {
		return mCompleteChain;
	}
	
	public void setChainArray(ArrayList<TxPOW> zList) {
		mCompleteChain = zList;
	}
	
	public void setCascader(long zLastBlock) {
		mCascader = zLastBlock;
	}
	
	public long getLastBlock() {
		return mCascader;
	}
	
	@Override
	public String toString() {
		return "NETV:"+mNetworkChatVersion+" LastBlock:"+mCascader+" "+mCompleteChain.toString();
	}
	
	@Override
	public void writeDataStream(DataOutputStream zOut) throws IOException {
		//net work version..
		mNetworkChatVersion.writeDataStream(zOut);
		
		//Last Block
		zOut.writeLong(mCascader);
		
		//Now send the chain
		int len 	 = mCompleteChain.size();
		MiniNumber ll = new MiniNumber(""+len);
		ll.writeDataStream(zOut);
		
		//And the chain
		for(TxPOW txpow : mCompleteChain) {
			txpow.writeDataStream(zOut);
		}
	}

	@Override
	public void readDataStream(DataInputStream zIn) throws IOException {
		//Read the network protocol version
		mNetworkChatVersion.readDataStream(zIn);

		//Last Block
		mCascader = zIn.readLong();
		
		//Read in the chain
		MiniNumber tt = new MiniNumber();
		tt.readDataStream(zIn);
		
		mCompleteChain = new ArrayList<>();
		for(long i=0;i<tt.getAsLong();i++) {
			TxPOW txid = new TxPOW();
			txid.readDataStream(zIn);
			mCompleteChain.add(txid);
		}
	}
	
}

package Flower.minima.system.backup;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Streamable;

public class SyncPackage implements Streamable{

	MiniNumber mCascadeNode;
	
	ArrayList<SyncPacket> mNodes;
	
	public SyncPackage() {
		mNodes = new ArrayList<>();
		mCascadeNode = MiniNumber.ZERO;
	}
	
	public void setCascadeNode(MiniNumber zNumber) {
		mCascadeNode = zNumber;
	}
	
	public MiniNumber getCascadeNode() {
		return mCascadeNode;
	}
	
	public ArrayList<SyncPacket> getAllNodes(){
		return mNodes;
	}

	@Override
	public void writeDataStream(DataOutputStream zOut) throws IOException {
		int len = mNodes.size();
		zOut.writeInt(len);
		for(SyncPacket node : mNodes) {
			node.writeDataStream(zOut);
		}
		mCascadeNode.writeDataStream(zOut);
	}

	@Override
	public void readDataStream(DataInputStream zIn) throws IOException {
		int len = zIn.readInt();
		for(int i=0;i<len;i++) {
			SyncPacket node = new SyncPacket();
			node.readDataStream(zIn);
			mNodes.add(node);
		}
		mCascadeNode = MiniNumber.ReadFromStream(zIn);
	}
	
	@Override
	public String toString() {
		String ret = "";
		for(SyncPacket node : mNodes) {
			ret += node+",";
		}
		return ret;
	}
}

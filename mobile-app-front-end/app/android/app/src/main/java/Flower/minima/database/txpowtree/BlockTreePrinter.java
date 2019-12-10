package Flower.minima.database.txpowtree;

import java.math.BigInteger;
import java.util.ArrayList;

import Flower.bretty.TreeNode;
import Flower.bretty.TreePrinter;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.Maths;
import Flower.minima.utils.SimpleLogger;

public class BlockTreePrinter {

	BlockTree mTree;
	
	long mCascadeNode=0;
	
	MiniData32 mTipID;
	
	public BlockTreePrinter(BlockTree zTree) {
		mTree = zTree;
	}
	
	public void printtree() {
		SimpleLogger.log("---------");
		SimpleLogger.log("Full Tree");
		SimpleLogger.log("---------");
		
		//The root node
		BlockTreeNode root = mTree.getChainRoot();
		
		if(root == null) {
			SimpleLogger.log("No tree root..");
			return;
		}
		
		//Which node is the cascader
		mCascadeNode = mTree.getCascadeNode().getTxPow().getBlockNumber().getAsLong();
		
		//Which block is the tip..
		mTipID = mTree.getChainTip().getTxPowID();
		
		//Now construct a tree..
		TreeNode mRoot = new TreeNode(convertNodeToString(root));
		
		//Drill it..
		drillNode(root, mRoot);
		
		//And finally print it..
		String output = TreePrinter.toString(mRoot);

		//And out it goes..
		SimpleLogger.log(output);
	
		//And some added details..
		SimpleLogger.log("Total POW : "+mTree.getChainRoot().getTotalWeight());
		SimpleLogger.log("Root      : "+mTree.getChainRoot());
		SimpleLogger.log("Tip       : "+mTree.getChainTip());
		SimpleLogger.log("Length    : "+mTree.getAsList().size());
		SimpleLogger.log("Cascade   : "+mCascadeNode);
		SimpleLogger.log("Speed     : "+mTree.getChainSpeed()+" blocks / sec");
		
		MiniNumber diff 	= mTree.getAvgChainDifficulty();
		BigInteger diffbi 	= diff.getAsBigInteger();
		
		double log = Maths.log2BI(diffbi);
		SimpleLogger.log("AVG Diff  : "+diff);
		SimpleLogger.log("LOG Diff  : "+log);
	}
	
	private String convertNodeToString(BlockTreeNode zNode) {
		int slev 	= zNode.getSuperBlockLevel();
		
		String weight= "{WEIGHT:"+zNode.getWeight()+"/"+zNode.getTotalWeight()+"} ";
		
		String ss = zNode.toString();
		
		String add = "";
		if(mCascadeNode == zNode.getTxPow().getBlockNumber().getAsLong()) {
			add += " [++CASCADING++]";
		}
		
		if(zNode.getTxPowID().isNumericallyEqual(mTipID)) {
			add += " [++THE TIP++]";
		}
		
		return weight + ss +" "+getStarString(slev)+" "+add;
	}
	
	private String getStarString(int zLen) {
		String ret = "";
		for(int i=0;i<zLen;i++) {
			ret += "*";
		}
		return ret;
	}
	
	private void drillNode(BlockTreeNode zNode, TreeNode zTreeNode) {
		//And all the children..
		ArrayList<BlockTreeNode> children = zNode.getChildren();
		
		//now do it..
		for(BlockTreeNode child : children) {
			//Create a tree node..
			TreeNode chilnode = new TreeNode(convertNodeToString(child));
			
			//Add to the Root node
			zTreeNode.addChild(chilnode);

			//And drill the child
			drillNode(child, chilnode);
		}
	}
	
	
	public static void clearScreen() {  
	    System.out.print("\033[H\033[2J");  
	    System.out.flush();  
	}

}

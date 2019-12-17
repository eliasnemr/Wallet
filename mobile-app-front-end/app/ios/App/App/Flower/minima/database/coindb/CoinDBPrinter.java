package Flower.minima.database.coindb;

import java.util.ArrayList;

import Flower.minima.utils.SimpleLogger;

public class CoinDBPrinter {

	public static void Print(CoinDB zDB){
	
		
		SimpleLogger.log("------");
		SimpleLogger.log("COINDB");
		SimpleLogger.log("------");
		
		
		ArrayList<CoinDBRow> rows = zDB.getComplete();
		SimpleLogger.log("Total COINDB Size : "+rows.size());
		
		int counter=0;
		for(CoinDBRow row : rows) {
//			if(!row.isSpent()) {
				SimpleLogger.log(counter+") "+row);
				counter++;
//			}
		}
		if(counter==0) {SimpleLogger.log("No coins..");}
	
	}
}

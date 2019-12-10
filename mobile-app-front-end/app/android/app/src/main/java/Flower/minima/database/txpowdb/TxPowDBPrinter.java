package Flower.minima.database.txpowdb;

import java.util.ArrayList;

import Flower.minima.utils.SimpleLogger;

public class TxPowDBPrinter {
	
	public static void PrintDB(TxPowDB zDB) {
		//Get the database..
		ArrayList<TxPOWDBRow> rows = zDB.getAllTxPOWDBRow();
		
		SimpleLogger.log("--------");
		SimpleLogger.log("TXPOW DB");
		SimpleLogger.log("--------");
		SimpleLogger.log("Total TXPOWDB Size : "+rows.size());
		
		
		int counter = 0;
		for(TxPOWDBRow row : rows) {
//			if(row.getTxPOW().isBlock()) {
				SimpleLogger.log(counter+" "+row);
				counter++;
//			}
		}
//		if(counter==0) {SimpleLogger.log("NO BLOCKS");}
		
//		counter = 0;
//		SimpleLogger.log("----");
//		SimpleLogger.log("TXNS");
//		SimpleLogger.log("----");
//		for(TxPOWDBRow row : rows) {
//			if(row.getTxPOW().isTransaction()) {
//				SimpleLogger.log(counter+" "+row);
//				counter++;
//			}
//		}
//		if(counter==0) {SimpleLogger.log("No txns..");}
		
	}
}

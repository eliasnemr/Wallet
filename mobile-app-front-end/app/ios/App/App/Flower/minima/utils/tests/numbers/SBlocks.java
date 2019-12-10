package Flower.minima.utils.tests.numbers;

import java.math.BigInteger;

import Flower.minima.utils.SimpleLogger;

public class SBlocks {

	public static void main(String[] zArgs) {
		
		int max = 256;
		
		BigInteger[] sbl = new BigInteger[max];
		
		BigInteger two = new BigInteger("2");
		for(int i=0;i<max;i++) {
			sbl[i] =  two.pow(i);
		
		
			SimpleLogger.log(i+")    0x"+ sbl[i].toString(16));
			
			
			
			
		}
		
				
		
	}
}

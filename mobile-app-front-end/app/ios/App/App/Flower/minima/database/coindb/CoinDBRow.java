package Flower.minima.database.coindb;

import Flower.minima.objects.Coin;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;

public interface CoinDBRow {
	
	public Coin getCoin();
	
	public void setIsSpent(boolean zSpent);
	public boolean isSpent();
	
	public void setInBlockNumber(MiniNumber zInBlockNumber);
	public MiniNumber getInBlockNumber();
	
	public void setIsInBlock(boolean zIn);
	public boolean isInBlock();
	
	public void setMMREntry(MiniNumber zEntry);
	public MiniNumber getMMREntry();
	
//	public void setConfirmed(boolean zConfirmed);
//	public boolean isConfirmed();
//	
//	public MiniData32 getInBlockHash();
}

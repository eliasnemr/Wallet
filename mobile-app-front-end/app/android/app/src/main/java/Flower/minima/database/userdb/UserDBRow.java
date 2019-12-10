package Flower.minima.database.userdb;

import Flower.minima.objects.Transaction;
import Flower.minima.objects.Witness;

public interface UserDBRow {

	public int getID();
	
	public Witness getWitness();
	
	public Transaction getTransaction();
		
	
}

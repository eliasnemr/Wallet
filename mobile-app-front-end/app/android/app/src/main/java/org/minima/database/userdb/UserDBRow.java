package org.minima.database.userdb;

import org.json.simple.JSONObject;
import org.minima.objects.Transaction;
import org.minima.objects.Witness;

public interface UserDBRow {

	public int getID();
	
	public Witness getWitness();
	
	public Transaction getTransaction();
		
	public JSONObject toJSON();
	
}

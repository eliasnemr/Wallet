package Flower.minima.utils;

import Flower.json.simple.JSONObject;

public class ResponseStream {

	/**
	 * Maximum Amount of time to wait for a response finish
	 */
	public static final long MAX_WAITTIME = 5000;
	
	/**
	 * What is the response
	 */
	String mFunction = "";
	
	/**
	 * The response as a JSON
	 */
	JSONObject mJSON = new JSONObject();
	
	/**
	 * The actual data being sent back
	 */
	JSONObject mDataJSON = new JSONObject();
	
	/**
	 * Has it finished
	 */
	boolean mFinished = false;
	
	/**
	 * Main Constructor
	 */
	public ResponseStream(){
		//Not finished yet
		mFinished = false;
	}

	public void setFunction(String zFunction) {
		mFunction = zFunction;
	}
	
	
	public String getResponse() {
		return mJSON.toString();
	}
	
	public JSONObject getDataJSON() {
		return mDataJSON;
	}
	
	public void endStatus(boolean zValid, String zError) {
		mJSON.put("status", zValid);
		mJSON.put("function", mFunction);
		
		if(!zValid) {
			mJSON.put("error", zError);
		}
		
		//Add the data to the JSON
		mJSON.put("response", mDataJSON);
		
		//It's finished
		mFinished = true;
	}
	
	public boolean isFinished() {
		return mFinished;
	}
	
	/**
	 * Wait a maximum amount of time..
	 */
	public void waitToFinish() {
		long timestart = System.currentTimeMillis();
		long timediff  = 0;
		
		//5 second max wait..
		while(!mFinished && timediff<MAX_WAITTIME) {
			//Wait 50ms..
			try {Thread.sleep(50);} catch (InterruptedException e) {}
			
			//Calculate
			timediff = System.currentTimeMillis() - timestart;
		}
	}
}

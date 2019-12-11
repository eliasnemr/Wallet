package Flower.minima.system.input;

//import Flower.minima.miniscript.exceptions.MinimaParseException;
import Flower.minima.system.Main;
import Flower.minima.system.input.functions.backup;
import Flower.minima.system.input.functions.balance;
import Flower.minima.system.input.functions.coins;
import Flower.minima.system.input.functions.connect;
import Flower.minima.system.input.functions.createtoken;
import Flower.minima.system.input.functions.disconnect;
import Flower.minima.system.input.functions.gimme50;
import Flower.minima.system.input.functions.help;
import Flower.minima.system.input.functions.intro;
import Flower.minima.system.input.functions.keys;
import Flower.minima.system.input.functions.minetrans;
import Flower.minima.system.input.functions.newaddress;
import Flower.minima.system.input.functions.newscript;
import Flower.minima.system.input.functions.printchain;
import Flower.minima.system.input.functions.quit;
import Flower.minima.system.input.functions.reconnect;
import Flower.minima.system.input.functions.runscript;
import Flower.minima.system.input.functions.send;
import Flower.minima.system.input.functions.status;
import Flower.minima.system.input.functions.test;
import Flower.minima.system.input.functions.trace;
import Flower.minima.system.input.functions.tutorial;
import Flower.minima.system.input.functions.txpowdrill;
import Flower.minima.system.input.functions.transfer.exportkey;
import Flower.minima.system.input.functions.transfer.importkey;
import Flower.minima.system.input.functions.txns.txncreate;
import Flower.minima.system.input.functions.txns.txndelete;
import Flower.minima.system.input.functions.txns.txninput;
import Flower.minima.system.input.functions.txns.txnlist;
import Flower.minima.system.input.functions.txns.txnoutput;
import Flower.minima.system.input.functions.txns.txnpost;
import Flower.minima.system.input.functions.txns.txnsign;
import Flower.minima.system.input.functions.txns.txnvalidate;
import Flower.minima.utils.ResponseStream;
import Flower.minima.utils.messages.Message;

public abstract class CommandFunction {

	/**
	 * All the command line functions for Minima
	 */
	public static CommandFunction[] ALL_FUNCTIONS = 
		{
			new backup(), new balance(), new connect(), new createtoken(), new disconnect(), 
			new gimme50(), new help(), new intro(), new minetrans(), new newaddress(), new coins(), new txpowdrill(), new keys(),
			new newscript(), new printchain(), new quit(),new reconnect(), new runscript(), 
			new send(), new status(), new test(), new trace(), new tutorial(),
			new exportkey(), new importkey(), 
			new txncreate(), new txndelete(), new txninput(), new txnlist(), 
			new txnoutput(), new txnpost(), new txnsign(), new txnvalidate()
		};  
	
	/**
	 * The function name
	 */
	private String mName;
	
	/**
	 * The Main Handler, so the function can access all data
	 */
	private Main mMain;
	
	/**
	 * The help description
	 */
	String mParams;
	String mSimple;
	String mDescription;
	
	/**
	 * Every function has a response stream to output the results
	 */
	ResponseStream mResponse;
	
	/**
	 * Constructor
	 * 
	 * @param zName
	 */
	public CommandFunction(String zName) {
		mName = zName;
		setHelp("","", "");
	}
	
	public Message getResponseMessage(String zMessageType) {
		//Create a new Message
		Message msg = new Message(zMessageType);
	
		//Add the Response Stream
		msg.addObject(InputHandler.INPUT_RESPONSE, mResponse);
		
		return msg;
	}
	
	public void setHelp(String zParams, String zSimple, String zDescription) {
		mParams			= zParams;
		mSimple 		= zSimple;
		mDescription 	= zDescription;
	}
	
	public String getName() {
		return mName;
	}
	
	public String getParams() {
		return mParams;
	}
	
	public String getSimple() {
		return mSimple;
	}
	
	public String getDescription() {
		return mDescription;
	}
	
	
	public void setMainHandler(Main zMainHandler) {
		mMain = zMainHandler;
	}
	
	protected Main getMainHandler() {
		return mMain;
	}
	
	public void setResponseStream(ResponseStream zResponse) {
		mResponse = zResponse;
	}
	
	public ResponseStream getResponseStream() {
		return mResponse;
	}
	
	/**
	 * Do the actual function
	 * @param zInput
	 * @throws Exception
	 */
	public abstract void doFunction(String[] zInput) throws Exception;
	
	/**
	 * Return a new copy of this function
	 * @return
	 */
	public abstract CommandFunction getNewFunction();
	
	/**
	 * Return a specific function given the name
	 * 
	 * @param zFunction
	 * @return
	 * @throws MinimaParseException
	 */
	public static CommandFunction getFunction(String zFunction) {
		//Cycle through all the functions - find the right one..
		for(CommandFunction func : CommandFunction.ALL_FUNCTIONS) {
			//Check it..
			if(func.getName().equalsIgnoreCase(zFunction)) {
				return func.getNewFunction();
			}
		}
		
		return null;
	}
}

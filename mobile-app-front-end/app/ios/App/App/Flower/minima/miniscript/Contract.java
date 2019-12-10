package Flower.minima.miniscript;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.List;
import java.util.StringTokenizer;

import Flower.minima.miniscript.exceptions.ExecutionException;
import Flower.minima.miniscript.exceptions.MinimaParseException;
import Flower.minima.miniscript.expressions.GlobalExpression;
import Flower.minima.miniscript.functions.MinimaFunction;
import Flower.minima.miniscript.statements.StatementBlock;
import Flower.minima.miniscript.statements.StatementParser;
import Flower.minima.miniscript.tokens.Token;
import Flower.minima.miniscript.values.BooleanValue;
import Flower.minima.miniscript.values.HEXValue;
import Flower.minima.miniscript.values.NumberValue;
import Flower.minima.miniscript.values.ScriptValue;
import Flower.minima.miniscript.values.Value;
import Flower.minima.objects.Transaction;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.utils.SimpleLogger;

/**
 * A RamScript Contract. Executes a given script, with the 
 * given Witness, and returns either TRUE or FALSE
 * 
 * The language is a BASIC variant and very simple with only 3 commands.
 * 
 * LET | IF | RETURN
 * 
 * coupled with a comprehensive EXPRESSION parser
 * 
 * Exception handling IS CONSENSUS CRITICAL. When an exception is thrown 
 * the script immediately exits with a FAIL. Clearly everyone needs to agree on what does
 * and what does not count as an exception. RamScriptExceptions has juicy details.
 * 
 * @author Spartacus Rex
 *
 */

public class Contract {
	
	//The final version of the script
	String mRamScript; 
	
	//A list of Parameters..
	ArrayList<Value> mParameters;
	
	//A list of valid signatures
	ArrayList<Value> mSignatures;
	
	//The Complete contract code, from root level
	StatementBlock mBlock;
	
	//A list of all the user-defined variables
	Hashtable<String, Value> mVariables;
	
	//A list of all the global variables available to scripts, like Blocknumber etc..
	Hashtable<Integer, Value> mGlobals;
		
	//The Transaction this Contract is being run on
	Transaction mTransaction = new Transaction();
	
	//Has the Script returned TRUE or FALSE
	private boolean mSuccess;
	private boolean mSuccessSet;
	
	/**
	 * Trace shows debug info as the program is parsed and executed
	 */
	boolean mTraceON = true;
	
	/**
	 * Did the contract script parse ok
	 */
	boolean mParseOK;
	
	/**
	 * The Number Of Instructions!
	 */
	int mNumInstructions;
	public static final int MAX_INSTRUCTIONS = 256;
	
	/**
	 * A complete log of the contract execution
	 */
	String mCompleteLog="";
	
	/**
	 * Main Constructor
	 * @param zRamScript - the RamScript in ASCII
	 */
//	public Contract(String zRamScript, String zParams, String zSigs) {
//		this(zRamScript, zParams, zSigs, new Transaction(), false);
//	}
	
	public Contract(String zRamScript, String zParams, String zSigs, Transaction zTransaction, boolean zTraceON) {
		//Trace?
		mTraceON     = zTraceON;
		mCompleteLog ="";
		
		//Clean the RamScript
		mRamScript = cleanScript(zRamScript);
	
		mTransaction = zTransaction;
		
		mParameters = new ArrayList<>();
		mSignatures = new ArrayList<>();
		mVariables  = new Hashtable<>();
		mGlobals    = new Hashtable<>();
		
		mBlock      = null;
		mSuccess    = false;
		mSuccessSet = false;
		mParseOK    = false;
		
		mNumInstructions = 0;
		
		//Load the Parameters.. no spaces allowed..
		StringTokenizer strtok = new StringTokenizer(zParams, ",");
		while(strtok.hasMoreTokens()) {
			String param = strtok.nextToken().trim();
			mParameters.add( Value.getValue(param) );
		}
				
		//Load the Signatures
		strtok = new StringTokenizer(zSigs, ",");
		while(strtok.hasMoreTokens()) {
			String sig = strtok.nextToken().trim();
			mSignatures.add( Value.getValue(sig) );
		}
		
		//Begin..
		traceLog("Contract   : "+mRamScript);
		int counter = 0;
		for(Value val : mParameters) {
			traceLog("Parameter["+counter+"] : "+val.toString());
			counter++;
		}

		counter = 0;
		for(Value val : mSignatures) {
			traceLog("Signatures["+counter+"] : "+val.toString());
			counter++;
		}
		
		//Parse the tokens
		try {
			//Tokenize the script
			List<Token> tokens = Token.tokenize(mRamScript);
			
			int count=0;
			for(Token tok : tokens) {
				traceLog((count++)+") Token : ["+tok.getTokenTypeString()+"] "+tok.getToken());
			}
		
			//Convert this list of Tokens into a list of Statements
			mBlock = StatementParser.parseTokens(tokens);
			
			traceLog("Script token parse OK.");
			mParseOK = true;
			
		} catch (MinimaParseException e) {
			e.printStackTrace();
		}
	}
	
	public void setupGlobalEnvironment(MiniNumber zBlockNum, String zAddress, MiniNumber zAmount) {
		Value blocknum = new NumberValue(zBlockNum);
		Value address  = new HEXValue(zAddress);
		Value amount   = new NumberValue(zAmount);
		Value script   = new ScriptValue(mRamScript);
		
		mGlobals.put(new Integer(GlobalExpression.GLOBAL_SCRIPT), new ScriptValue(mRamScript));
		traceLog("Global [@SCRIPT]   : "+script);
		
		mGlobals.put(new Integer(GlobalExpression.GLOBAL_BLOCKNUM), new NumberValue(zBlockNum));
		traceLog("Global [@BLKNUM]   : "+blocknum);
		
		mGlobals.put(new Integer(GlobalExpression.GLOBAL_ADDRESS), new HEXValue(zAddress));
		traceLog("Global [@ADDRESS]  : "+address);
		
		mGlobals.put(new Integer(GlobalExpression.GLOBAL_AMOUNT), new NumberValue(zAmount));
		traceLog("Global [@AMOUNT]   : "+amount);
	}
	
	public boolean isParseOK() {
		return mParseOK;
	}
	
	public boolean isTrace() {
		return mTraceON;
	}
	
	public void traceLog(String zLog) {
		if(isTrace()) {
			SimpleLogger.log("INST["+mNumInstructions+"] - "+zLog);
		}
		
		//Store the complete Log
		mCompleteLog += zLog+"\n";
	}
	
	public String getCompleteTraceLog() {
		return mCompleteLog;
	}
	
	public void countInstructions() throws ExecutionException {
		mNumInstructions++;
		if(mNumInstructions > MAX_INSTRUCTIONS) {
			throw new ExecutionException("MAX instruction number reached! "+mNumInstructions);
		}
	}
	
	public void run() {
		if(!mParseOK) {
			traceLog("Script parse FAILED. Please fix and retry.");
			return;
		}
		
		//Run the code block
		try {
			traceLog("Start executing the contract");
			
			mBlock.run(this);
			
		} catch (ExecutionException e) {
			e.printStackTrace();
			
			//AUTOMATIC FAIL
			traceLog("Execution Error - "+e);
			
			mSuccess 	= false;
			mSuccessSet = true;
		}
		
		//How'd it go..
		traceLog("Contract instructions : "+mNumInstructions);
		traceLog("Contract finished     : "+mSuccess);
	}
	
	public void setRETURNValue(boolean zSUCCESS) {
		if(!mSuccessSet) {
			mSuccess 	= zSUCCESS;
			mSuccessSet = true;
		}
	}
	
	public boolean isSuccess() {
		return mSuccess;
	}
	
	public boolean isSuccessSet() {
		return mSuccessSet;
	}
	
	public String getRamScript() {
		return mRamScript;
	}
	
	public Transaction getTransaction() {
		return mTransaction;
	}
	
	public Value getVariable(String zName) throws ExecutionException {
		Value ret = mVariables.get(zName);
		if(ret==null) {
			throw new ExecutionException("NULL Variable - "+zName);
		}
		return ret;
	}
	
	public void setVariable(String zName, Value zValue) {
		mVariables.put(zName, zValue);
		
		//Output..
		String varlist = "{ ";
		Enumeration<String> keys = mVariables.keys();
		while(keys.hasMoreElements()) {
			//Get the Key
			String key = keys.nextElement();
			
			//Get the Value
			Value val = mVariables.get(key);
			
			//Log it.. 
			int type = val.getValueType();
			switch (type)  {
				case BooleanValue.VALUE_BOOLEAN :
					varlist += key+" = "+Boolean.toString(val.isTrue()).toUpperCase()+", ";
				break;
				case HEXValue.VALUE_HEX :
					varlist += key+" = "+val+", ";
				break;
				case NumberValue.VALUE_NUMBER :
					varlist += key+" = "+val+", ";
				break;
				case ScriptValue.VALUE_SCRIPT :
					varlist += key+" = [ "+val+" ], ";
				break;
			}		
		}

		traceLog(varlist+"}");
	}
	
	
	public Value getGlobal(int zGlobal) throws ExecutionException {
		Value ret = mGlobals.get(new Integer(zGlobal));
		if(ret==null) {
			throw new ExecutionException("NULL GLOBAL - "+zGlobal);
		}
		return ret;
	}
	
	/**
	 * Return one of the initial parameters
	 * @param zValue
	 * @return the value (NUMBER | HEX)
	 */
	public Value getParameter(int zValue)throws ExecutionException {
		if(zValue >= mParameters.size()) {
			throw new ExecutionException("Parameter variable number too high..  "+zValue);
		}
		return mParameters.get(zValue);
	}
	
	/**
	 * Check if this transaction has been signed by this public key
	 * @param zSignature
	 * @return
	 */
	public boolean checkSignature(Value zSignature) {
		MiniData checksig = zSignature.getMiniData();
		
		for(Value sig : mSignatures) {
			if(sig.getMiniData().isNumericallyEqual(checksig)) {
				return true;
			}
		}
		
		return false;
	}
	
	/**
	 * Convert a string into the Required format for MiniScript.
	 * @param zScript
	 * @return The Converted Script
	 */
	public static String cleanScript(String zScript) {
		String script = new String(" "+zScript.toLowerCase()+" ");
		
		//Incase this is a param string
		script = script.replaceAll(",", " , ");
		
		//Double up the spaces.. in case of double NOT 
		script = script.replaceAll(" ", "  ");
		
		//STILL NEED TO DO - .. minus.. ignoring numbers..
//		script = script.replaceAll("\\-[a-z]", " - ");
		
		//Operators
		script = script.replaceAll("\\(", " ( ");
		script = script.replaceAll("\\)", " ) ");
		script = script.replaceAll("\\[", " [ ");
		script = script.replaceAll("\\]", " ] ");
		script = script.replaceAll("<<", " << ");
		script = script.replaceAll(">>", " >> ");
		script = script.replaceAll("\\&" , " & ");
		script = script.replaceAll("\\|" , " | ");
		script = script.replaceAll("\\^" , " ^ ");
		script = script.replaceAll("\\*", " * ");
		script = script.replaceAll("\\+", " + ");
		script = script.replaceAll("\\=", " = ");
		script = script.replaceAll("\\%", " % ");
			
		//Boolean
		script = script.replaceAll(" nand ", " NAND ");
		script = script.replaceAll(" nxor ", " NXOR ");
		script = script.replaceAll(" nor ", " NOR ");
		script = script.replaceAll(" and ", " AND ");
		script = script.replaceAll(" xor ", " XOR ");
		script = script.replaceAll(" or ", " OR ");
		script = script.replaceAll(" not ", " NOT ");
		script = script.replaceAll(" neg ", " NEG ");
		script = script.replaceAll(" neq ", " NEQ ");
		script = script.replaceAll(" gte ", " GTE ");
		script = script.replaceAll(" lte ", " LTE ");
		script = script.replaceAll(" gt ", " GT ");
		script = script.replaceAll(" eq ", " EQ ");
		script = script.replaceAll(" lt ", " LT ");
		
		//Commands
		String[] allcommands = Token.TOKENS_COMMAND;
		for(int i=0;i<allcommands.length;i++) {
			String find = " "+allcommands[i].toLowerCase()+" ";
			String repl = " "+allcommands[i]+" ";
			script = script.replaceAll(find,repl);
		}
		
		script = script.replaceAll(" true ", " TRUE ");
		script = script.replaceAll(" false ", " FALSE ");
		
		//Globals
		script = script.replaceAll(" @blknum ", " @BLKNUM ");
		script = script.replaceAll(" @address ", " @ADDRESS ");
		script = script.replaceAll(" @amount ", " @AMOUNT "); 
		script = script.replaceAll(" @script ", " @SCRIPT "); 
		
		//And now do all the functions
		for(MinimaFunction func : MinimaFunction.ALL_FUNCTIONS) {
			//Name
			String name = func.getName();
			
			//replace
			script = script.replaceAll(" "+name.toLowerCase()+" ", " "+name+" ");
		}
		
		//Remove all the excess white space
		script = script.replaceAll("\\s+"," ").trim();
			
		//And finally convert the HEX to upper case..
		String finalstring = "";
		StringTokenizer strtok = new StringTokenizer(script," ");
		while(strtok.hasMoreTokens()) {
			String tok = strtok.nextToken();
			if(tok.startsWith("0x")) {
				finalstring = finalstring.concat(" 0x"+tok.substring(2).toUpperCase());
			}else {
				finalstring = finalstring.concat(" "+tok);
			}
		}
					
		//Boom..
		return finalstring.trim();
	}
	
	public static void main(String[] zArgs) {
		
//		String RamScript = 
//				  "let y=4 "
//				+ "IF y EQ 0 THEN "
//				+ "  let x =1 "
//				+ "ELSEif y EQ 3 THEN "
//				+ "  let x=2 "
//				+ "ELSE"				
//				+ "  let x =3 "
//				+ "ENDIF let p=0";
		
//		String RamScript = 
//				"let he = 0xeeff let sc = [hello you] let bool = true let x=0 let y=0 while x LT 2 do let y=y+1 let x = x+1 endwhile ";
		
//		String RamScript = "return VERifyoutput( 0 0xffeeff00ff11 10 0x00)";
		String RamScript = "let g = 0x11223344 let h = rev(g)";
//		String RamScript = "return true or 1 lt 2 and true";
		
//		String RamScript = "LET x=1 while x Lt 10 THEN LET x = x + 1 ENDWHILE LET y =x";
//		String RamScript = "if 1 EQ 1 THEN let y = 3 endif";
//		String RamScript = "let x = true or false let y = [return x] Exec y";
		
		Contract ctr = new Contract(RamScript," 0xfF , 0xee","0x1234,0x00FF",new Transaction(),true);
		ctr.setupGlobalEnvironment(new MiniNumber("10"), "0x67876AB", MiniNumber.ONE);
		ctr.run();
	}
	
}

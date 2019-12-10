package Flower.minima.system.input.functions;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import Flower.minima.system.input.CommandFunction;
import Flower.minima.utils.SimpleLogger;

public class tutorial extends CommandFunction{

	public tutorial() {
		super("tutorial");
		setHelp("", "Explain Minima and go through Scripting!", "");
	}
	
	@Override
	public void doFunction(String[] zInput) throws Exception {
		InputStream in = getClass().getClassLoader().getResourceAsStream("org/minima/system/input/functions/tutorial.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(in));
		
		int linenumber=1;
		String line = null;
        while ( (line = br.readLine()) != null) {
            // do something with the line here
        	getResponseStream().getDataJSON().put(getLineNumber(linenumber++), line);
        }
        
        getResponseStream().endStatus(true, "");
	}
	
	public String getLineNumber(int zLine) {
		if(zLine<10) {
			return "  "+zLine;
		}else if(zLine<100) {
			return " "+zLine;
		}
		
		return ""+zLine;
	}
	
	
	@Override
	public CommandFunction getNewFunction() {
		// TODO Auto-generated method stub
		return new tutorial();
	}
}

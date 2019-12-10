package Flower.minima;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;

import Flower.json.simple.JSONArray;
import Flower.minima.system.Main;
import Flower.minima.system.backup.BackupManager;
import Flower.minima.system.input.InputMessage;
import Flower.minima.utils.MiniFormat;
import Flower.minima.utils.ResponseStream;
import Flower.minima.utils.SimpleLogger;

/**
 * @author Paddy Cerri
 *
 */
public class Start {
    static Main mMain;
    
    public Start() {
        
        Runnable rr = new Runnable() {
            public void run() {
                System.out.println("Minima started..");
                main(new String[0]);
            }
        };
        
        Thread tt = new Thread(rr);
        tt.start();
    }
    
    /**
     * Main Entry point for the app from the command line
     *
     * @param zArgs
     */

    public static void main(String[] zArgs){
        
        //Check command line inputs
        int arglen                 = zArgs.length;
        int port                 = 9001;

        //Is a function called when there is a new relevant transaction..
        //This function could put the data in a web database etc..
        String txnfunction = "";
        String relcoin     = "";
        
        boolean connect         = false;
        String connecthost      = "";
        int connectport         = 9001;
        
        boolean noconnect       = false;
        boolean clean           = false;
        boolean genesis         = false;
        boolean daemon          = false;
        
        String conffolder = System.getProperty("user.home")+"/minima";
        
        if(arglen > 0) {
            int counter    =    0;
            while(counter<arglen) {
                String arg     = zArgs[counter];
                counter++;
                
                if(arg.equals("-port")) {
                    //The port
                    port= Integer.parseInt(zArgs[counter++]);
                    
                }else if(arg.equals("-help")) {
                    //Printout HELP!
                    SimpleLogger.log("Minima v0.4 Alpha Test Net");
                    SimpleLogger.log("        -port [port number]    : Specify port to listen on");
                    SimpleLogger.log("        -conf [folder]         : Specify configuration folder, where data is saved");
                    SimpleLogger.log("        -private               : Run a private chain. Don't connect to MainNet. Create a genesis tx-pow. Simulate some users.");
                    SimpleLogger.log("        -noconnect             : Don't connect to MainNet. Can then connect to private chains.");
                    SimpleLogger.log("        -connect [host] [port] : Don't connect to MainNet. Connect to this node.");
                    SimpleLogger.log("        -relcoin [POST_URL]    : HTTP POST of new coins in json format (all in 'data') that are relevant to this wallet.");
                    SimpleLogger.log("        -clean                 : Wipe user files and chain backup. Start afresh.");
                    SimpleLogger.log("        -daemon                : Accepts no input from STDIN. Can run in background process.");
                    SimpleLogger.log("        -help                  : Show this help");
                    SimpleLogger.log("");
                    SimpleLogger.log("With zero params Minima will start and connect to the Main Net.");
                    
                    return;
                
                }else if(arg.equals("-private")) {
                    genesis    = true;
                    noconnect  = true;
                    clean      = true;
                    
                }else if(arg.equals("-noconnect")) {
                    noconnect = true;
                
                }else if(arg.equals("-daemon")) {
                    daemon = true;
                
                }else if(arg.equals("-connect")) {
                    connect = true;
                    connecthost = zArgs[counter++];
                    connectport = Integer.parseInt(zArgs[counter++]);
                    
                }else if(arg.equals("-clean")) {
                    clean = true;
                
                }else if(arg.equals("-txncall")) {
                    txnfunction = zArgs[counter++];
                    
                }else if(arg.equals("-relcoin")) {
                    relcoin = zArgs[counter++];
                    
                }else if(arg.equals("-conf")) {
                    conffolder = zArgs[counter++];
                    
                }else {
                    SimpleLogger.log("UNKNOWN arg.. : "+arg);
                    System.exit(0);
                }
            }
        }
        
        connect = true;
        connecthost = "34.65.19.123";
        connectport = 9001;
        clean      = true;
        daemon     = false;
        port       = 9002;
        
        
        //Do we wipe
        if(clean) {
            BackupManager.deleteFolder(new File(conffolder));
        }
        
        //Start the main Minima server
        Main rcmainserver = new Main(port,genesis, conffolder);
        mMain = rcmainserver;
        
        if(noconnect) {
            rcmainserver.setAutoConnect(false);
        }
        
        if(connect) {
            rcmainserver.setAutoConnect(true);
            rcmainserver.mAutoHost = connecthost;
            rcmainserver.mAutoPort = connectport;
        }
        
        if(!txnfunction.equals("")) {
            SimpleLogger.log("New Txn function : "+txnfunction);
            rcmainserver.setNewTxnCommand(txnfunction);
        }
        
        if(!relcoin.equals("")) {
            SimpleLogger.log("New Relevant Coin URL : "+relcoin);
            rcmainserver.setNewRelCoin(relcoin);
        }
        
        //Start the system
        rcmainserver.PostMessage(Main.SYSTEM_STARTUP);
        
        if(daemon) {
            
            while (rcmainserver.isRunning()) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }else {
            //Listen for input
            InputStreamReader is    = new InputStreamReader(System.in);
            BufferedReader bis      = new BufferedReader(is);
    
            //Loop until finished..
            while(rcmainserver.isRunning()){
                try {
                    //Get a line of input
                    String input = bis.readLine().trim();
                    
                    //New response packet..
                    ResponseStream response = new ResponseStream();
                    
                    if(!input.equals("")) {
                        //Set the output stream
                        InputMessage inmsg = new InputMessage(input, response);
                        
                        //Tell main server
                        rcmainserver.getInputHandler().PostMessage(inmsg);
                    
                        //Is it quit..
                        if(input.toLowerCase().equals("quit")) {
                            break;
                        }
                    
                        //Wait for the function to finish
                        response.waitToFinish();
                        
                        //Get the response..
                        String resp = response.getResponse();
                        
                        //Check it's a JSON - Hack for now..
//                        if(resp.startsWith("{")) {
//                            resp = MiniFormat.PrettyJSON(resp);
//                        }
                        //Make it pretty
                        resp = MiniFormat.PrettyJSON(resp);
                         
                        //And then print out the result
                        System.out.println(resp);
                    }
                    
                    
                } catch (IOException ex) {
                    SimpleLogger.log(""+ex);
                }
            }
            
            //Cross the streams..
            try {
                bis.close();
                is.close();
            } catch (IOException ex) {
                SimpleLogger.log(""+ex);
            }
        }
        
    }
    
    public static void DoBackup(){
        //Set the output stream
        InputMessage inmsg = new InputMessage("backup", new ResponseStream());
        
        //Tell main server
        mMain.getInputHandler().PostMessage(inmsg);
    }
}


package Flower.minima.system.brains;

import java.util.ArrayList;

import Flower.minima.database.MinimaDB;
import Flower.minima.database.coindb.CoinDB;
import Flower.minima.database.coindb.CoinDBRow;
import Flower.minima.database.mmr.MMRData;
import Flower.minima.database.mmr.MMREntry;
import Flower.minima.database.mmr.MMRProof;
import Flower.minima.database.mmr.MMRSet;
import Flower.minima.database.txpowdb.TxPOWDBRow;
import Flower.minima.miniscript.Contract;
import Flower.minima.objects.Address;
import Flower.minima.objects.Coin;
import Flower.minima.objects.PubPrivKey;
import Flower.minima.objects.Transaction;
import Flower.minima.objects.TxPOW;
import Flower.minima.objects.Witness;
import Flower.minima.objects.base.MiniByte;
import Flower.minima.objects.base.MiniData;
import Flower.minima.objects.base.MiniData32;
import Flower.minima.objects.base.MiniNumber;
import Flower.minima.system.input.functions.gimme50;
import Flower.minima.utils.Crypto;
import Flower.minima.utils.SimpleLogger;

public class TxPOWChecker {
	
	/**
	 * Check JUST the signatures. This only ever has to be done once.
	 * 
	 * @param zTxPOW
	 * @return
	 */
	public static boolean checkSigs(TxPOW zTxPOW) {
		//get the Transaction..
		Transaction trans = zTxPOW.getTransaction();
		
		//Get the Hash
		MiniData32 transhash = Crypto.getInstance().hashObject(trans);
		
		//Now cycle
		Witness wit = zTxPOW.getWitness();
		int len     = wit.getAllPubKeys().size();
		
		for(int i=0;i<len;i++) {
			MiniData pubk = wit.getPublicKey(i);
			MiniData sig  = wit.getSignature(i);
			
			//Check it..
			boolean ok = PubPrivKey.verify(pubk, transhash, sig);
			if(!ok) {
				return false;
			}
		}
		
		return true;
	}
	
	/**
	 * Check a transaction, and update the MMR. If the block is invalid - the MMR will never be used anyway.
	 * @param zTrans
	 * @param zWit
	 * @param zDB
	 * @param zBlockNumber - current block number
	 * @param zMMRSet
	 * @return
	 */
	
	public static boolean checkTransactionMMR(TxPOW zTxPOW, MinimaDB zDB) {
		return checkTransactionMMR(zTxPOW.getTransaction(), zTxPOW.getWitness(), zDB, zDB.getTopBlock(), zDB.getMainTree().getChainTip().getMMRSet(), false);
	}
	
//	public static boolean checkTransactionMMR(Transaction zTrans, Witness zWit, MinimaDB zDB, MiniNumber zBlockNumber, MMRSet zMMRSet) {
//		return checkTransactionMMR(zTrans, zWit, zDB, zBlockNumber, zMMRSet, true);
//	}
		
	public static boolean checkTransactionMMR(Transaction zTrans, Witness zWit, MinimaDB zDB, MiniNumber zBlockNumber, MMRSet zMMRSet, boolean zTouchMMR) {
		//Check the input scripts
		ArrayList<Coin> inputs  = zTrans.getAllInputs();
		
		//The Signatures
		String sigs = zWit.getAllPubKeysCSV();
				
		//First Inputs..
		MiniNumber totalin = MiniNumber.ZERO;
		int ins = inputs.size();
		for(int i=0;i<ins;i++) {
			//Get the Input
			Coin input = inputs.get(i);

			//Get the Script..
			String script = zWit.getScript(i);
			
			if(input.getCoinID().isExactlyEqual(gimme50.COINID_INPUT) && input.getAmount().isLessEqual(new MiniNumber("50"))){
				//We good.. TESTNET allows up to 50 printed..
				//..
			}else {
				//Check the Address is the hash of the SCRIPT
				Address scraddr = new Address(script);
				if(!scraddr.getAddressData().isExactlyEqual(input.getAddress())) {
					return false;
				}
				
				//Is it a valid input.. UNSPENT in MMR
				MMRProof proof = zWit.getAllProofs().get(i);
				
				//MUST be a full proof
				if(proof.getMMRData().isHashOnly()) {
					return false;
				}
				
				//Is the proof chain valid
				boolean valid = zMMRSet.checkProof(proof);
				if(!valid) {
					return false;
				}
				
				//Is this input for the correct details..
				if(!proof.checkCoin(input)) {
					return false;
				}
				
				if(zTouchMMR) {
					//Update the MMR with this spent coin..
					MMREntry spent = zMMRSet.updateSpentCoin(proof);
				
					//Do we keep it..
					if(zDB.getUserDB().isAddressRelevant(input.getAddress())) {
						zMMRSet.addKeeper(spent.getEntry());	
					}
				}
				
				//Get the Params if any
				String params = zWit.getParam(i);
				
				//Create the Contract to check..
				Contract cc = new Contract(script,params,sigs,zTrans,false);
				
				//set the environment
				String address = input.getAddress().toString();
				cc.setupGlobalEnvironment(zBlockNumber, address, input.getAmount());
				
				//Run it!
				cc.run();
				
				//and.. ?
				if(!cc.isSuccess()) {
					return false;
				}
			}
			
			//Add to the total
			totalin = totalin.add(input.getAmount());
		}
		
		//The HASH of the Transaction.. needed for coinid
		MiniData32 transhash = Crypto.getInstance().hashObject(zTrans);
				
		//Get outputs - add them to the MMR also..
		MiniNumber totalout = MiniNumber.ZERO;
		ArrayList<Coin> outputs  = zTrans.getAllOutputs();
		int outs = outputs.size();
		for(int i=0;i<outs;i++) {
			//Get the coin..
			Coin output = outputs.get(i);
			
			//Now calculate the CoinID / TokenID
			MiniData32 coinid = Crypto.getInstance().hashObjects(transhash, new MiniByte(i));
			
			//Is this a token create output..
			MiniData32 tokid = output.getTokenID();
			if(output.getTokenID().isNumericallyEqual(Coin.TOKENID_CREATE)) {
				//Set the TokenID to the COinID..
				tokid = coinid;
			}
			
			if(zTouchMMR) {
				//Create a new Coin..
				Coin mmrcoin = new Coin(coinid, output.getAddress(), output.getAmount(), tokid);
				
				//Now add as an unspent to the MMR
				MMRData mmrdata = new MMRData(MiniByte.FALSE, mmrcoin);
				
				//And Add it..
				MMREntry unspent = zMMRSet.addUnspentCoin(mmrdata);
				
				//Do we keep it..
				if(zDB.getUserDB().isAddressRelevant(output.getAddress())) {
					zMMRSet.addKeeper(unspent.getEntry());	
				}
			}
			
			//Check the total..
			totalout = totalout.add(outputs.get(i).getAmount());
		}
		
		//And final check..
		//TODO.. check tokens as well as base Minima
		if(totalout.isMore(totalin)) {
			return false;
		}
		
		//All OK!
		return true;
	}
}

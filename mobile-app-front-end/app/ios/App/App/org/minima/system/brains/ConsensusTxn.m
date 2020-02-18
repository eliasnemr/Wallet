//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/brains/ConsensusTxn.java
//

#include "J2ObjC_source.h"
#include "java/lang/Boolean.h"
#include "java/util/ArrayList.h"
#include "org/minima/database/MinimaDB.h"
#include "org/minima/database/coindb/CoinDB.h"
#include "org/minima/database/coindb/CoinDBRow.h"
#include "org/minima/database/mmr/MMRSet.h"
#include "org/minima/database/txpowtree/BlockTree.h"
#include "org/minima/database/txpowtree/BlockTreeNode.h"
#include "org/minima/database/userdb/UserDB.h"
#include "org/minima/database/userdb/UserDBRow.h"
#include "org/minima/objects/Address.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/PubPrivKey.h"
#include "org/minima/objects/StateVariable.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/Witness.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusTxn.h"
#include "org/minima/system/brains/TxPOWChecker.h"
#include "org/minima/system/input/InputHandler.h"
#include "org/minima/utils/Crypto.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/json/JSONArray.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/messages/Message.h"

@interface OrgMinimaSystemBrainsConsensusTxn ()

- (OrgMinimaDatabaseMinimaDB *)getMainDB;

- (jboolean)checkTransactionValidWithInt:(jint)zTrans;

- (void)listTransactionsWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

@end

__attribute__((unused)) static OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusTxn_getMainDB(OrgMinimaSystemBrainsConsensusTxn *self);

__attribute__((unused)) static jboolean OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(OrgMinimaSystemBrainsConsensusTxn *self, jint zTrans);

__attribute__((unused)) static void OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(OrgMinimaSystemBrainsConsensusTxn *self, OrgMinimaUtilsMessagesMessage *zMessage);

NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_PREFIX = @"CONSENSUSTXN_";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNCREATE = @"CONSENSUSTXN_TXNCREATE";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNDELETE = @"CONSENSUSTXN_TXNDELETE";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNLIST = @"CONSENSUSTXN_TXNLIST";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNINPUT = @"CONSENSUSTXN_TXNINPUT";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNOUTPUT = @"CONSENSUSTXN_TXNOUTPUT";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSTATEVAR = @"CONSENSUSTXN_TXNSTATEVAR";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSIGN = @"CONSENSUSTXN_TXNSIGN";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNVALIDATE = @"CONSENSUSTXN_TXNVALIDATE";
NSString *OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNPOST = @"CONSENSUSTXN_TXNPOST";

@implementation OrgMinimaSystemBrainsConsensusTxn

- (instancetype)initWithOrgMinimaDatabaseMinimaDB:(OrgMinimaDatabaseMinimaDB *)zDB
        withOrgMinimaSystemBrainsConsensusHandler:(OrgMinimaSystemBrainsConsensusHandler *)zHandler {
  OrgMinimaSystemBrainsConsensusTxn_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self, zDB, zHandler);
  return self;
}

- (OrgMinimaDatabaseMinimaDB *)getMainDB {
  return OrgMinimaSystemBrainsConsensusTxn_getMainDB(self);
}

- (jboolean)checkTransactionValidWithInt:(jint)zTrans {
  return OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, zTrans);
}

- (void)listTransactionsWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNCREATE]) {
    [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) addUserRow];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNDELETE]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) deleteUserRowWithInt:trans];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNLIST]) {
    OrgMinimaUtilsJsonJSONArray *arr = create_OrgMinimaUtilsJsonJSONArray_init();
    JavaUtilArrayList *rows = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getAllRows];
    for (id<OrgMinimaDatabaseUserdbUserDBRow> __strong row in nil_chk(rows)) {
      [arr addWithId:[((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk(row)) toJSON]];
    }
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage))) putWithId:@"transactions" withId:arr];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNINPUT]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    OrgMinimaObjectsBaseMiniHash *coinid = (OrgMinimaObjectsBaseMiniHash *) cast_chk([zMessage getObjectWithNSString:@"coinid"], [OrgMinimaObjectsBaseMiniHash class]);
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getTransaction];
    OrgMinimaObjectsWitness *wit = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getWitness];
    id<OrgMinimaDatabaseCoindbCoinDBRow> crow = [((id<OrgMinimaDatabaseCoindbCoinDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getCoinDB])) getCoinRowWithOrgMinimaObjectsBaseMiniHash:coinid];
    if (crow == nil) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@", @"CoinID not found : ", coinid));
      return;
    }
    OrgMinimaObjectsCoin *cc = [crow getCoin];
    NSString *script = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getScriptWithOrgMinimaObjectsBaseMiniHash:[((OrgMinimaObjectsCoin *) nil_chk(cc)) getAddress]];
    if ([((NSString *) nil_chk(script)) isEqual:@""]) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@$", @"UNKNOWN ADDRESS ", [cc getAddress], @" not in database.."));
      return;
    }
    [((OrgMinimaObjectsTransaction *) nil_chk(trx)) addInputWithOrgMinimaObjectsCoin:cc];
    [((OrgMinimaObjectsWitness *) nil_chk(wit)) addScriptWithNSString:script];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNOUTPUT]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    OrgMinimaObjectsAddress *addr = (OrgMinimaObjectsAddress *) cast_chk([zMessage getObjectWithNSString:@"address"], [OrgMinimaObjectsAddress class]);
    NSString *value = [zMessage getStringWithNSString:@"value"];
    NSString *tokenid = [zMessage getStringWithNSString:@"tokenid"];
    OrgMinimaObjectsCoin *out = create_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_(JreLoadStatic(OrgMinimaObjectsCoin, COINID_OUTPUT), [((OrgMinimaObjectsAddress *) nil_chk(addr)) getAddressData], create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(value), create_OrgMinimaObjectsBaseMiniHash_initWithNSString_(tokenid));
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getTransaction];
    [((OrgMinimaObjectsTransaction *) nil_chk(trx)) addOutputWithOrgMinimaObjectsCoin:out];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSTATEVAR]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    jint port = [zMessage getIntegerWithNSString:@"stateport"];
    NSString *variable = [zMessage getStringWithNSString:@"statevariable"];
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getTransaction];
    OrgMinimaObjectsStateVariable *sv = create_OrgMinimaObjectsStateVariable_initWithOrgMinimaObjectsBaseMiniNumber_withNSString_(create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(JreStrcat("I", port)), variable);
    [((OrgMinimaObjectsTransaction *) nil_chk(trx)) addStateVariableWithOrgMinimaObjectsStateVariable:sv];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNPOST]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getTransaction];
    OrgMinimaObjectsWitness *wit = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans])) getWitness];
    OrgMinimaObjectsWitness *newwit = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) createValidWitnessWithOrgMinimaObjectsTransaction:trx withOrgMinimaObjectsWitness:wit];
    if (newwit == nil) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, @"ERROR creating valid Witness. MMR Proofs wrong..");
      return;
    }
    OrgMinimaUtilsMessagesMessage *msg = [((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS) addObjectWithNSString:@"transaction" withId:trx])) addObjectWithNSString:@"witness" withId:wit];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(msg, zMessage);
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(mHandler_)) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNVALIDATE]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    id<OrgMinimaDatabaseUserdbUserDBRow> row = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans];
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk(row)) getTransaction];
    OrgMinimaObjectsWitness *wit = [row getWitness];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    OrgMinimaObjectsBaseMiniNumber *ins = [((OrgMinimaObjectsTransaction *) nil_chk(trx)) sumInputs];
    OrgMinimaObjectsBaseMiniNumber *outs = [trx sumOutputs];
    OrgMinimaObjectsBaseMiniNumber *burn = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(ins)) subWithOrgMinimaObjectsBaseMiniNumber:outs];
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"inputs_sum" withId:[ins description]];
    [resp putWithId:@"outputs_sum" withId:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(outs)) description]];
    [resp putWithId:@"burn" withId:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(burn)) description]];
    [resp putWithId:@"valid_amounts" withId:JavaLangBoolean_valueOfWithBoolean_([outs isLessEqualWithOrgMinimaObjectsBaseMiniNumber:ins])];
    OrgMinimaObjectsWitness *newwit = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) createValidWitnessWithOrgMinimaObjectsTransaction:trx withOrgMinimaObjectsWitness:wit];
    if (newwit == nil) {
      [resp putWithId:@"mmr_proof" withId:JavaLangBoolean_valueOfWithBoolean_(false)];
      [resp putWithId:@"mmr_check" withId:JavaLangBoolean_valueOfWithBoolean_(false)];
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
      return;
    }
    else {
      [resp putWithId:@"mmr_proof" withId:JavaLangBoolean_valueOfWithBoolean_(true)];
    }
    jboolean checkok = OrgMinimaSystemBrainsTxPOWChecker_checkTransactionMMRWithOrgMinimaObjectsTransaction_withOrgMinimaObjectsWitness_withOrgMinimaDatabaseMinimaDB_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaDatabaseMmrMMRSet_withBoolean_(trx, wit, OrgMinimaSystemBrainsConsensusTxn_getMainDB(self), [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getTopBlock], [((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk([((OrgMinimaDatabaseTxpowtreeBlockTree *) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getMainTree])) getChainTip])) getMMRSet], false);
    [resp putWithId:@"mmr_check" withId:JavaLangBoolean_valueOfWithBoolean_(checkok)];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSIGN]) {
    jint trans = [zMessage getIntegerWithNSString:@"transaction"];
    NSString *pubkey = [zMessage getStringWithNSString:@"pubkey"];
    OrgMinimaObjectsBaseMiniData *pubk = create_OrgMinimaObjectsBaseMiniData_initWithNSString_(pubkey);
    if (!OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(self, trans)) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$I", @"Invalid TXN chosen : ", trans));
      return;
    }
    OrgMinimaObjectsPubPrivKey *key = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getPubPrivKeyWithOrgMinimaObjectsBaseMiniData:pubk];
    if (key == nil) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$$", @"ERROR : invalidate key to sign with. Not present in DB. ", pubkey));
      return;
    }
    id<OrgMinimaDatabaseUserdbUserDBRow> row = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:trans];
    OrgMinimaObjectsTransaction *trx = [((id<OrgMinimaDatabaseUserdbUserDBRow>) nil_chk(row)) getTransaction];
    OrgMinimaObjectsWitness *wit = [row getWitness];
    OrgMinimaObjectsBaseMiniHash *transhash = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectWithOrgMinimaUtilsStreamable:trx];
    OrgMinimaObjectsBaseMiniData *signature = [key signWithOrgMinimaObjectsBaseMiniHash:transhash];
    [((OrgMinimaObjectsWitness *) nil_chk(wit)) addSignatureWithOrgMinimaObjectsBaseMiniData:pubk withOrgMinimaObjectsBaseMiniData:signature];
    OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(self, zMessage);
  }
}

- (void)dealloc {
  RELEASE_(mDB_);
  RELEASE_(mHandler_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseMinimaDB;", 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x2, 1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 3, 4, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 5, 4, 6, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaDatabaseMinimaDB:withOrgMinimaSystemBrainsConsensusHandler:);
  methods[1].selector = @selector(getMainDB);
  methods[2].selector = @selector(checkTransactionValidWithInt:);
  methods[3].selector = @selector(listTransactionsWithOrgMinimaUtilsMessagesMessage:);
  methods[4].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "CONSENSUS_PREFIX", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 7, -1, -1 },
    { "CONSENSUS_TXNCREATE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 8, -1, -1 },
    { "CONSENSUS_TXNDELETE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 9, -1, -1 },
    { "CONSENSUS_TXNLIST", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "CONSENSUS_TXNINPUT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 11, -1, -1 },
    { "CONSENSUS_TXNOUTPUT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 12, -1, -1 },
    { "CONSENSUS_TXNSTATEVAR", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 13, -1, -1 },
    { "CONSENSUS_TXNSIGN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 14, -1, -1 },
    { "CONSENSUS_TXNVALIDATE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 15, -1, -1 },
    { "CONSENSUS_TXNPOST", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 16, -1, -1 },
    { "mDB_", "LOrgMinimaDatabaseMinimaDB;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mHandler_", "LOrgMinimaSystemBrainsConsensusHandler;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaDatabaseMinimaDB;LOrgMinimaSystemBrainsConsensusHandler;", "checkTransactionValid", "I", "listTransactions", "LOrgMinimaUtilsMessagesMessage;", "processMessage", "LJavaLangException;", &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_PREFIX, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNCREATE, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNDELETE, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNLIST, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNINPUT, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNOUTPUT, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSTATEVAR, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNSIGN, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNVALIDATE, &OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNPOST };
  static const J2ObjcClassInfo _OrgMinimaSystemBrainsConsensusTxn = { "ConsensusTxn", "org.minima.system.brains", ptrTable, methods, fields, 7, 0x1, 5, 12, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemBrainsConsensusTxn;
}

@end

void OrgMinimaSystemBrainsConsensusTxn_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaSystemBrainsConsensusTxn *self, OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  NSObject_init(self);
  JreStrongAssign(&self->mDB_, zDB);
  JreStrongAssign(&self->mHandler_, zHandler);
}

OrgMinimaSystemBrainsConsensusTxn *new_OrgMinimaSystemBrainsConsensusTxn_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemBrainsConsensusTxn, initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_, zDB, zHandler)
}

OrgMinimaSystemBrainsConsensusTxn *create_OrgMinimaSystemBrainsConsensusTxn_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemBrainsConsensusTxn, initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_, zDB, zHandler)
}

OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusTxn_getMainDB(OrgMinimaSystemBrainsConsensusTxn *self) {
  return self->mDB_;
}

jboolean OrgMinimaSystemBrainsConsensusTxn_checkTransactionValidWithInt_(OrgMinimaSystemBrainsConsensusTxn *self, jint zTrans) {
  id<OrgMinimaDatabaseUserdbUserDBRow> row = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusTxn_getMainDB(self))) getUserDB])) getUserRowWithInt:zTrans];
  if (row == nil) {
    return false;
  }
  return true;
}

void OrgMinimaSystemBrainsConsensusTxn_listTransactionsWithOrgMinimaUtilsMessagesMessage_(OrgMinimaSystemBrainsConsensusTxn *self, OrgMinimaUtilsMessagesMessage *zMessage) {
  OrgMinimaUtilsMessagesMessage *list = create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_TXNLIST);
  OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(list, zMessage);
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(self->mHandler_)) PostMessageWithOrgMinimaUtilsMessagesMessage:list];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemBrainsConsensusTxn)

//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/Main.java
//

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/lang/System.h"
#include "java/lang/Thread.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/backup/BackupManager.h"
#include "org/minima/system/bootstrap/UserSimulator.h"
#include "org/minima/system/brains/ConsensusBackup.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/external/ProcessManager.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/InputHandler.h"
#include "org/minima/system/network/NetworkHandler.h"
#include "org/minima/system/tx/TXMiner.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/messages/Message.h"
#include "org/minima/utils/messages/MessageProcessor.h"

@interface OrgMinimaSystemMain () {
 @public
  OrgMinimaSystemInputInputHandler *mInput_;
  OrgMinimaSystemNetworkNetworkHandler *mNetwork_;
  OrgMinimaSystemTxTXMiner *mTXMiner_;
  OrgMinimaSystemBrainsConsensusHandler *mConsensus_;
  OrgMinimaSystemBackupBackupManager *mBackup_;
  OrgMinimaSystemExternalProcessManager *mProcessManager_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mInput_, OrgMinimaSystemInputInputHandler *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mNetwork_, OrgMinimaSystemNetworkNetworkHandler *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mTXMiner_, OrgMinimaSystemTxTXMiner *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mConsensus_, OrgMinimaSystemBrainsConsensusHandler *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mBackup_, OrgMinimaSystemBackupBackupManager *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemMain, mProcessManager_, OrgMinimaSystemExternalProcessManager *)

NSString *OrgMinimaSystemMain_SYSTEM_STARTUP = @"SYSTEM_STARTUP";
NSString *OrgMinimaSystemMain_SYSTEM_INIT = @"SYSTEM_INIT";
NSString *OrgMinimaSystemMain_SYSTEM_SHUTDOWN = @"SYSTEM_SHUTDOWN";
NSString *OrgMinimaSystemMain_SYSTEM_FULLSHUTDOWN = @"SYSTEM_FULLSHUTDOWN";
NSString *OrgMinimaSystemMain_SYSTEM_ALLSTOP = @"SYSTEM_ALLSTOP";
NSString *OrgMinimaSystemMain_SYSTEM_EVENT = @"SYSTEM_EVENT";

@implementation OrgMinimaSystemMain

- (instancetype)initWithInt:(jint)zPort
                    withInt:(jint)zRPCPort
                withBoolean:(jboolean)zGenesis
               withNSString:(NSString *)zConfFolder {
  OrgMinimaSystemMain_initWithInt_withInt_withBoolean_withNSString_(self, zPort, zRPCPort, zGenesis, zConfFolder);
  return self;
}

- (void)setAutoConnectWithBoolean:(jboolean)zAuto {
  mAutoConnect_ = zAuto;
}

- (void)setAutoConnectHostPortWithNSString:(NSString *)zHost
                                   withInt:(jint)zPort {
  JreStrongAssign(&mAutoHost_, zHost);
  mAutoPort_ = zPort;
}

- (jlong)getNodeStartTime {
  return mNodeStartTime_;
}

- (void)setNewTxnCommandWithNSString:(NSString *)zExec {
  [((OrgMinimaSystemExternalProcessManager *) nil_chk(mProcessManager_)) setTXNCallFunctionWithNSString:zExec];
}

- (void)setNewRelCoinWithNSString:(NSString *)zPostURL {
  [((OrgMinimaSystemExternalProcessManager *) nil_chk(mProcessManager_)) setRelCoinWithNSString:zPostURL];
}

- (void)setSimulatorWithBoolean:(jboolean)zON
                        withInt:(jint)zCount
                    withBoolean:(jboolean)zStress {
  [((OrgMinimaSystemBootstrapUserSimulator *) nil_chk(mSim_)) setMiningWithBoolean:zON withInt:zCount withBoolean:zStress];
}

- (void)SystemShutDown {
  [self PostMessageWithNSString:OrgMinimaSystemMain_SYSTEM_SHUTDOWN];
}

- (void)setTraceWithBoolean:(jboolean)zTraceON {
  [self setLOGWithBoolean:zTraceON];
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(mConsensus_)) setLOGWithBoolean:zTraceON];
  [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(mNetwork_)) PostMessageWithOrgMinimaUtilsMessagesMessage:[create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_TRACE) addBooleanWithNSString:@"trace" withBoolean:zTraceON]];
  [((OrgMinimaSystemTxTXMiner *) nil_chk(mTXMiner_)) setLOGWithBoolean:zTraceON];
  [((OrgMinimaSystemInputInputHandler *) nil_chk(mInput_)) setLOGWithBoolean:zTraceON];
  [((OrgMinimaSystemBackupBackupManager *) nil_chk(mBackup_)) setLOGWithBoolean:zTraceON];
  [((OrgMinimaSystemExternalProcessManager *) nil_chk(mProcessManager_)) setLOGWithBoolean:zTraceON];
}

- (OrgMinimaSystemInputInputHandler *)getInputHandler {
  return mInput_;
}

- (OrgMinimaSystemNetworkNetworkHandler *)getNetworkHandler {
  return mNetwork_;
}

- (OrgMinimaSystemBrainsConsensusHandler *)getConsensusHandler {
  return mConsensus_;
}

- (OrgMinimaSystemBackupBackupManager *)getBackupManager {
  return mBackup_;
}

- (OrgMinimaSystemExternalProcessManager *)getProcessManager {
  return mProcessManager_;
}

- (OrgMinimaSystemTxTXMiner *)getMiner {
  return mTXMiner_;
}

- (OrgMinimaSystemBootstrapUserSimulator *)getsimulator {
  return mSim_;
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemMain_SYSTEM_STARTUP]) {
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([self getConsensusHandler])) setBackUpManager];
    if (mGenesis_) {
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(mConsensus_)) genesis];
      [((OrgMinimaSystemBootstrapUserSimulator *) nil_chk(mSim_)) setMiningWithBoolean:true withInt:-1 withBoolean:false];
      [self PostMessageWithNSString:OrgMinimaSystemMain_SYSTEM_INIT];
    }
    else {
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([self getConsensusHandler])) PostMessageWithNSString:JreLoadStatic(OrgMinimaSystemBrainsConsensusBackup, CONSENSUSBACKUP_RESTORE)];
    }
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemMain_SYSTEM_INIT]) {
    OrgMinimaUtilsMessagesMessage *netstart = [((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_STARTUP) addIntWithNSString:@"port" withInt:mPort_])) addIntWithNSString:@"rpcport" withInt:mRPCPort_];
    [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(mNetwork_)) PostMessageWithOrgMinimaUtilsMessagesMessage:netstart];
    if (mAutoConnect_) {
      OrgMinimaUtilsMessagesMessage *connect = [((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_CONNECT) addIntWithNSString:@"port" withInt:mAutoPort_])) addStringWithNSString:@"host" withNSString:mAutoHost_];
      [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([self getNetworkHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:connect];
    }
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemMain_SYSTEM_SHUTDOWN]) {
    OrgMinimaUtilsMessagesMessage *backshut = create_OrgMinimaUtilsMessagesMessage_initWithNSString_(JreLoadStatic(OrgMinimaSystemBrainsConsensusBackup, CONSENSUSBACKUP_BACKUP));
    [backshut addBooleanWithNSString:@"shutdown" withBoolean:true];
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([self getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:backshut];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemMain_SYSTEM_FULLSHUTDOWN]) {
    [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(mNetwork_)) PostMessageWithNSString:OrgMinimaSystemNetworkNetworkHandler_NETWORK_SHUTDOWN];
    [((OrgMinimaSystemInputInputHandler *) nil_chk(mInput_)) stopMessageProcessor];
    [((OrgMinimaSystemTxTXMiner *) nil_chk(mTXMiner_)) stopMessageProcessor];
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(mConsensus_)) stopMessageProcessor];
    [((OrgMinimaSystemBackupBackupManager *) nil_chk(mBackup_)) stopMessageProcessor];
    [((OrgMinimaSystemExternalProcessManager *) nil_chk(mProcessManager_)) stopMessageProcessor];
    [((OrgMinimaSystemBootstrapUserSimulator *) nil_chk(mSim_)) stopMessageProcessor];
    JavaLangThread_sleepWithLong_(250);
    [self stopMessageProcessor];
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(mConsensus_)) updateListenersWithOrgMinimaUtilsMessagesMessage:create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_QUIT)];
    OrgMinimaUtilsMinimaLogger_logWithNSString_(@"Minima Stopped. Bye Bye..");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemMain_SYSTEM_ALLSTOP]) {
    IOSObjectArray *input = [IOSObjectArray arrayWithObjects:(id[]){ @"minetrans", @"off" } count:2 type:NSString_class_()];
    OrgMinimaSystemInputCommandFunction *minetrans = OrgMinimaSystemInputCommandFunction_getFunctionWithNSString_(@"minetrans");
    [((OrgMinimaSystemInputCommandFunction *) nil_chk(minetrans)) setMainHandlerWithOrgMinimaSystemMain:[((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([self getConsensusHandler])) getMainHandler]];
    [minetrans doFunctionWithNSStringArray:input];
    [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([self getNetworkHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_ALLSTOP)];
  }
  else {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@", @"Unknown Message sent to main handler ", zMessage));
  }
}

- (void)dealloc {
  RELEASE_(mInput_);
  RELEASE_(mNetwork_);
  RELEASE_(mTXMiner_);
  RELEASE_(mConsensus_);
  RELEASE_(mBackup_);
  RELEASE_(mProcessManager_);
  RELEASE_(mSim_);
  RELEASE_(mAutoHost_);
  RELEASE_(mCurrentTopBlock_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 4, -1, -1, -1, -1 },
    { NULL, "J", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 5, 6, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 6, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 8, 9, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 10, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemInputInputHandler;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemNetworkNetworkHandler;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemBrainsConsensusHandler;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemBackupBackupManager;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemExternalProcessManager;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemTxTXMiner;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemBootstrapUserSimulator;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 11, 12, 13, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithInt:withInt:withBoolean:withNSString:);
  methods[1].selector = @selector(setAutoConnectWithBoolean:);
  methods[2].selector = @selector(setAutoConnectHostPortWithNSString:withInt:);
  methods[3].selector = @selector(getNodeStartTime);
  methods[4].selector = @selector(setNewTxnCommandWithNSString:);
  methods[5].selector = @selector(setNewRelCoinWithNSString:);
  methods[6].selector = @selector(setSimulatorWithBoolean:withInt:withBoolean:);
  methods[7].selector = @selector(SystemShutDown);
  methods[8].selector = @selector(setTraceWithBoolean:);
  methods[9].selector = @selector(getInputHandler);
  methods[10].selector = @selector(getNetworkHandler);
  methods[11].selector = @selector(getConsensusHandler);
  methods[12].selector = @selector(getBackupManager);
  methods[13].selector = @selector(getProcessManager);
  methods[14].selector = @selector(getMiner);
  methods[15].selector = @selector(getsimulator);
  methods[16].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "SYSTEM_STARTUP", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 14, -1, -1 },
    { "SYSTEM_INIT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 15, -1, -1 },
    { "SYSTEM_SHUTDOWN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 16, -1, -1 },
    { "SYSTEM_FULLSHUTDOWN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 17, -1, -1 },
    { "SYSTEM_ALLSTOP", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 18, -1, -1 },
    { "SYSTEM_EVENT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 19, -1, -1 },
    { "mInput_", "LOrgMinimaSystemInputInputHandler;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mNetwork_", "LOrgMinimaSystemNetworkNetworkHandler;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mTXMiner_", "LOrgMinimaSystemTxTXMiner;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mConsensus_", "LOrgMinimaSystemBrainsConsensusHandler;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mBackup_", "LOrgMinimaSystemBackupBackupManager;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mProcessManager_", "LOrgMinimaSystemExternalProcessManager;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mSim_", "LOrgMinimaSystemBootstrapUserSimulator;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mGenesis_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mPort_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mRPCPort_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mAutoConnect_", "Z", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mAutoHost_", "LNSString;", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mAutoPort_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mCurrentTopBlock_", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mNodeStartTime_", "J", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "IIZLNSString;", "setAutoConnect", "Z", "setAutoConnectHostPort", "LNSString;I", "setNewTxnCommand", "LNSString;", "setNewRelCoin", "setSimulator", "ZIZ", "setTrace", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", &OrgMinimaSystemMain_SYSTEM_STARTUP, &OrgMinimaSystemMain_SYSTEM_INIT, &OrgMinimaSystemMain_SYSTEM_SHUTDOWN, &OrgMinimaSystemMain_SYSTEM_FULLSHUTDOWN, &OrgMinimaSystemMain_SYSTEM_ALLSTOP, &OrgMinimaSystemMain_SYSTEM_EVENT };
  static const J2ObjcClassInfo _OrgMinimaSystemMain = { "Main", "org.minima.system", ptrTable, methods, fields, 7, 0x1, 17, 21, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemMain;
}

@end

void OrgMinimaSystemMain_initWithInt_withInt_withBoolean_withNSString_(OrgMinimaSystemMain *self, jint zPort, jint zRPCPort, jboolean zGenesis, NSString *zConfFolder) {
  OrgMinimaUtilsMessagesMessageProcessor_initWithNSString_(self, @"MAIN     ");
  self->mGenesis_ = false;
  self->mAutoConnect_ = false;
  JreStrongAssign(&self->mAutoHost_, @"");
  self->mAutoPort_ = 0;
  self->mNodeStartTime_ = JavaLangSystem_currentTimeMillis();
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"**********************************************");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"*  __  __  ____  _  _  ____  __  __    __    *");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"*                                            *");
  OrgMinimaUtilsMinimaLogger_logWithNSString_(@"**********************************************");
  self->mPort_ = zPort;
  self->mRPCPort_ = zRPCPort;
  JreStrongAssignAndConsume(&self->mInput_, new_OrgMinimaSystemInputInputHandler_initWithOrgMinimaSystemMain_(self));
  JreStrongAssignAndConsume(&self->mNetwork_, new_OrgMinimaSystemNetworkNetworkHandler_initWithOrgMinimaSystemMain_(self));
  JreStrongAssignAndConsume(&self->mTXMiner_, new_OrgMinimaSystemTxTXMiner_initWithOrgMinimaSystemMain_(self));
  JreStrongAssignAndConsume(&self->mBackup_, new_OrgMinimaSystemBackupBackupManager_initWithOrgMinimaSystemMain_withNSString_(self, zConfFolder));
  JreStrongAssignAndConsume(&self->mProcessManager_, new_OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(self));
  JreStrongAssignAndConsume(&self->mConsensus_, new_OrgMinimaSystemBrainsConsensusHandler_initWithOrgMinimaSystemMain_(self));
  self->mGenesis_ = zGenesis;
  JreStrongAssignAndConsume(&self->mSim_, new_OrgMinimaSystemBootstrapUserSimulator_initWithOrgMinimaSystemMain_(self));
}

OrgMinimaSystemMain *new_OrgMinimaSystemMain_initWithInt_withInt_withBoolean_withNSString_(jint zPort, jint zRPCPort, jboolean zGenesis, NSString *zConfFolder) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemMain, initWithInt_withInt_withBoolean_withNSString_, zPort, zRPCPort, zGenesis, zConfFolder)
}

OrgMinimaSystemMain *create_OrgMinimaSystemMain_initWithInt_withInt_withBoolean_withNSString_(jint zPort, jint zRPCPort, jboolean zGenesis, NSString *zConfFolder) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemMain, initWithInt_withInt_withBoolean_withNSString_, zPort, zRPCPort, zGenesis, zConfFolder)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemMain)

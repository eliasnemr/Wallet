//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/help.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/functions/backup.h"
#include "org/minima/system/input/functions/balance.h"
#include "org/minima/system/input/functions/coins.h"
#include "org/minima/system/input/functions/connect.h"
#include "org/minima/system/input/functions/createtoken.h"
#include "org/minima/system/input/functions/disconnect.h"
#include "org/minima/system/input/functions/gimme50.h"
#include "org/minima/system/input/functions/help.h"
#include "org/minima/system/input/functions/keys.h"
#include "org/minima/system/input/functions/minetrans.h"
#include "org/minima/system/input/functions/newaddress.h"
#include "org/minima/system/input/functions/newscript.h"
#include "org/minima/system/input/functions/printchain.h"
#include "org/minima/system/input/functions/printtree.h"
#include "org/minima/system/input/functions/quit.h"
#include "org/minima/system/input/functions/reconnect.h"
#include "org/minima/system/input/functions/runscript.h"
#include "org/minima/system/input/functions/send.h"
#include "org/minima/system/input/functions/status.h"
#include "org/minima/system/input/functions/trace.h"
#include "org/minima/system/input/functions/transfer/exportkey.h"
#include "org/minima/system/input/functions/transfer/importkey.h"
#include "org/minima/system/input/functions/tutorial.h"
#include "org/minima/system/input/functions/txns/txncreate.h"
#include "org/minima/system/input/functions/txns/txndelete.h"
#include "org/minima/system/input/functions/txns/txninput.h"
#include "org/minima/system/input/functions/txns/txnlist.h"
#include "org/minima/system/input/functions/txns/txnoutput.h"
#include "org/minima/system/input/functions/txns/txnpost.h"
#include "org/minima/system/input/functions/txns/txnsign.h"
#include "org/minima/system/input/functions/txns/txnstatevar.h"
#include "org/minima/system/input/functions/txns/txnvalidate.h"
#include "org/minima/system/input/functions/txpowinfo.h"
#include "org/minima/system/input/functions/weblink.h"
#include "org/minima/utils/ResponseStream.h"
#include "org/minima/utils/json/JSONObject.h"

@implementation OrgMinimaSystemInputFunctionshelp

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemInputFunctionshelp_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput {
  if (((IOSObjectArray *) nil_chk(zInput))->size_ > 1) {
    NSString *func = IOSObjectArray_Get(zInput, 1);
    OrgMinimaSystemInputCommandFunction *found = OrgMinimaSystemInputCommandFunction_getFunctionWithNSString_(func);
    if (found == nil) {
      [((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) endStatusWithBoolean:false withNSString:JreStrcat("$$", @"Function not found : ", func)];
    }
    else {
      NSString *desc = [((NSString *) nil_chk([found getDescription])) java_trim];
      if ([((NSString *) nil_chk(desc)) isEqual:@""]) {
        [((OrgMinimaUtilsJsonJSONObject *) nil_chk([((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) getDataJSON])) putWithId:@"description" withId:JreStrcat("$$$", [found getParams], @" - ", [found getSimple])];
      }
      else {
        [((OrgMinimaUtilsJsonJSONObject *) nil_chk([((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) getDataJSON])) putWithId:@"description" withId:JreStrcat("$$$", [found getParams], @" - ", desc)];
      }
      [((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) endStatusWithBoolean:true withNSString:@""];
    }
  }
  else {
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionshelp_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionstutorial_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsstatus_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsprintchain_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsprinttree_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionstrace_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsminetrans_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsbackup_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsconnect_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsdisconnect_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsreconnect_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsweblink_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsgimme50_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionssend_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsbalance_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionscoins_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionskeys_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionstxpowinfo_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionscreatetoken_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsnewaddress_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsnewscript_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsrunscript_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTransferexportkey_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTransferimportkey_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnlist_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxncreate_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxndelete_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxninput_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnoutput_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnstatevar_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnsign_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnvalidate_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsTxnstxnpost_init()];
    [self addJSONDescWithOrgMinimaSystemInputCommandFunction:create_OrgMinimaSystemInputFunctionsquit_init()];
    [((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) endStatusWithBoolean:true withNSString:@""];
  }
}

- (void)addJSONDescWithOrgMinimaSystemInputCommandFunction:(OrgMinimaSystemInputCommandFunction *)zFunc {
  NSString *params = [((NSString *) nil_chk([((NSString *) nil_chk([((NSString *) nil_chk([((OrgMinimaSystemInputCommandFunction *) nil_chk(zFunc)) getParams])) java_replaceAll:@"\\{" withReplacement:@"\\("])) java_replaceAll:@"\\}" withReplacement:@"\\)"])) java_trim];
  NSString *name = [self getStrOfLengthWithInt:12 withNSString:[zFunc getName]];
  if ([((NSString *) nil_chk(params)) isEqual:@""]) {
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk([((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) getDataJSON])) putWithId:name withId:[zFunc getSimple]];
  }
  else {
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk([((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) getDataJSON])) putWithId:name withId:JreStrcat("$$$", params, @" - ", [zFunc getSimple])];
  }
}

- (NSString *)getStrOfLengthWithInt:(jint)zDesiredLen
                       withNSString:(NSString *)zString {
  NSString *ret = [NSString stringWithString:zString];
  jint len = [ret java_length];
  if (len >= zDesiredLen) {
    return [ret java_substring:0 endIndex:zDesiredLen];
  }
  for (jint i = 0; i < zDesiredLen - len; i++) {
    ret = [((NSString *) nil_chk(ret)) java_concat:@" "];
  }
  return ret;
}

- (OrgMinimaSystemInputCommandFunction *)getNewFunction {
  return create_OrgMinimaSystemInputFunctionshelp_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 2, 3, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 4, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemInputCommandFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(doFunctionWithNSStringArray:);
  methods[2].selector = @selector(addJSONDescWithOrgMinimaSystemInputCommandFunction:);
  methods[3].selector = @selector(getStrOfLengthWithInt:withNSString:);
  methods[4].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "doFunction", "[LNSString;", "addJSONDesc", "LOrgMinimaSystemInputCommandFunction;", "getStrOfLength", "ILNSString;" };
  static const J2ObjcClassInfo _OrgMinimaSystemInputFunctionshelp = { "help", "org.minima.system.input.functions", ptrTable, methods, NULL, 7, 0x1, 5, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemInputFunctionshelp;
}

@end

void OrgMinimaSystemInputFunctionshelp_init(OrgMinimaSystemInputFunctionshelp *self) {
  OrgMinimaSystemInputCommandFunction_initWithNSString_(self, @"help");
  [self setHelpWithNSString:@"{function}" withNSString:@"Show the help for all or a specified function" withNSString:@"If you are unsure how to use a function you can type help function, and a longer description with a complete org.minima.datadog.example will be shown.\n\nhelp send"];
}

OrgMinimaSystemInputFunctionshelp *new_OrgMinimaSystemInputFunctionshelp_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemInputFunctionshelp, init)
}

OrgMinimaSystemInputFunctionshelp *create_OrgMinimaSystemInputFunctionshelp_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemInputFunctionshelp, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemInputFunctionshelp)

J2OBJC_NAME_MAPPING(OrgMinimaSystemInputFunctionshelp, "org.minima.system.input.functions", "OrgMinimaSystemInputFunctions")

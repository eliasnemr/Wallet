//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/MinimaFunction.java
//

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/exceptions/ExecutionException.h"
#include "org/minima/miniscript/exceptions/MinimaParseException.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/functions/base/CONCAT.h"
#include "org/minima/miniscript/functions/base/LEN.h"
#include "org/minima/miniscript/functions/base/REV.h"
#include "org/minima/miniscript/functions/base/RPLVAR.h"
#include "org/minima/miniscript/functions/base/SUBSET.h"
#include "org/minima/miniscript/functions/cast/ASCII.h"
#include "org/minima/miniscript/functions/cast/BOOL.h"
#include "org/minima/miniscript/functions/cast/HEX.h"
#include "org/minima/miniscript/functions/cast/NUMBER.h"
#include "org/minima/miniscript/functions/cast/SCRIPT.h"
#include "org/minima/miniscript/functions/maths/ABS.h"
#include "org/minima/miniscript/functions/maths/BITGET.h"
#include "org/minima/miniscript/functions/maths/BITSET.h"
#include "org/minima/miniscript/functions/maths/CEIL.h"
#include "org/minima/miniscript/functions/maths/DEC.h"
#include "org/minima/miniscript/functions/maths/FLOOR.h"
#include "org/minima/miniscript/functions/maths/INC.h"
#include "org/minima/miniscript/functions/maths/MAX.h"
#include "org/minima/miniscript/functions/maths/MIN.h"
#include "org/minima/miniscript/functions/sha/ADDR.h"
#include "org/minima/miniscript/functions/sha/CHAINSHA.h"
#include "org/minima/miniscript/functions/sha/SHA2.h"
#include "org/minima/miniscript/functions/sha/SHA3.h"
#include "org/minima/miniscript/functions/sigs/CHECKSIG.h"
#include "org/minima/miniscript/functions/sigs/MULTISIG.h"
#include "org/minima/miniscript/functions/sigs/SIGNEDBY.h"
#include "org/minima/miniscript/functions/txn/PREVSTATE.h"
#include "org/minima/miniscript/functions/txn/STATE.h"
#include "org/minima/miniscript/functions/txn/output/GETOUTADDR.h"
#include "org/minima/miniscript/functions/txn/output/GETOUTAMT.h"
#include "org/minima/miniscript/functions/txn/output/GETOUTTOK.h"
#include "org/minima/miniscript/functions/txn/output/VERIFYOUT.h"
#include "org/minima/miniscript/values/Value.h"

@interface OrgMinimaMiniscriptFunctionsMinimaFunction () {
 @public
  NSString *mName_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaMiniscriptFunctionsMinimaFunction, mName_, NSString *)

J2OBJC_INITIALIZED_DEFN(OrgMinimaMiniscriptFunctionsMinimaFunction)

IOSObjectArray *OrgMinimaMiniscriptFunctionsMinimaFunction_ALL_FUNCTIONS;

@implementation OrgMinimaMiniscriptFunctionsMinimaFunction

- (instancetype)initWithNSString:(NSString *)zName {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(self, zName);
  return self;
}

- (void)addParameterWithOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zParam {
  [((JavaUtilArrayList *) nil_chk(mParameters_)) addWithId:zParam];
}

- (id<OrgMinimaMiniscriptExpressionsExpression>)getParameterWithInt:(jint)zParamNum {
  if (zParamNum >= [self getParameterNum]) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$$$I", @"Parameter missing for ", [self getName], @" num:", zParamNum));
  }
  return [((JavaUtilArrayList *) nil_chk(mParameters_)) getWithInt:zParamNum];
}

- (jint)getParameterNum {
  return [((JavaUtilArrayList *) nil_chk(mParameters_)) size];
}

- (JavaUtilArrayList *)getAllParameters {
  return mParameters_;
}

- (NSString *)getName {
  return mName_;
}

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  // can't call an abstract method
  [self doesNotRecognizeSelector:_cmd];
  return 0;
}

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction {
  // can't call an abstract method
  [self doesNotRecognizeSelector:_cmd];
  return 0;
}

+ (OrgMinimaMiniscriptFunctionsMinimaFunction *)getFunctionWithNSString:(NSString *)zFunction {
  return OrgMinimaMiniscriptFunctionsMinimaFunction_getFunctionWithNSString_(zFunction);
}

- (void)dealloc {
  RELEASE_(mName_);
  RELEASE_(mParameters_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptExpressionsExpression;", 0x1, 3, 4, 5, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LJavaUtilArrayList;", 0x1, -1, -1, -1, 6, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x401, 7, 8, 5, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptFunctionsMinimaFunction;", 0x401, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptFunctionsMinimaFunction;", 0x9, 9, 0, 10, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithNSString:);
  methods[1].selector = @selector(addParameterWithOrgMinimaMiniscriptExpressionsExpression:);
  methods[2].selector = @selector(getParameterWithInt:);
  methods[3].selector = @selector(getParameterNum);
  methods[4].selector = @selector(getAllParameters);
  methods[5].selector = @selector(getName);
  methods[6].selector = @selector(runFunctionWithOrgMinimaMiniscriptContract:);
  methods[7].selector = @selector(getNewFunction);
  methods[8].selector = @selector(getFunctionWithNSString:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "ALL_FUNCTIONS", "[LOrgMinimaMiniscriptFunctionsMinimaFunction;", .constantValue.asLong = 0, 0x9, -1, 11, -1, -1 },
    { "mName_", "LNSString;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mParameters_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 12, -1 },
  };
  static const void *ptrTable[] = { "LNSString;", "addParameter", "LOrgMinimaMiniscriptExpressionsExpression;", "getParameter", "I", "LOrgMinimaMiniscriptExceptionsExecutionException;", "()Ljava/util/ArrayList<Lorg/minima/miniscript/expressions/Expression;>;", "runFunction", "LOrgMinimaMiniscriptContract;", "getFunction", "LOrgMinimaMiniscriptExceptionsMinimaParseException;", &OrgMinimaMiniscriptFunctionsMinimaFunction_ALL_FUNCTIONS, "Ljava/util/ArrayList<Lorg/minima/miniscript/expressions/Expression;>;" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptFunctionsMinimaFunction = { "MinimaFunction", "org.minima.miniscript.functions", ptrTable, methods, fields, 7, 0x401, 9, 3, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptFunctionsMinimaFunction;
}

+ (void)initialize {
  if (self == [OrgMinimaMiniscriptFunctionsMinimaFunction class]) {
    JreStrongAssignAndConsume(&OrgMinimaMiniscriptFunctionsMinimaFunction_ALL_FUNCTIONS, [IOSObjectArray newArrayWithObjects:(id[]){ create_OrgMinimaMiniscriptFunctionsBaseCONCAT_init(), create_OrgMinimaMiniscriptFunctionsBaseLEN_init(), create_OrgMinimaMiniscriptFunctionsBaseRPLVAR_init(), create_OrgMinimaMiniscriptFunctionsBaseREV_init(), create_OrgMinimaMiniscriptFunctionsBaseSUBSET_init(), create_OrgMinimaMiniscriptFunctionsCastBOOL_init(), create_OrgMinimaMiniscriptFunctionsCastNUMBER_init(), create_OrgMinimaMiniscriptFunctionsCastHEX_init(), create_OrgMinimaMiniscriptFunctionsCastSCRIPT_init(), create_OrgMinimaMiniscriptFunctionsCastASCII_init(), create_OrgMinimaMiniscriptFunctionsMathsABS_init(), create_OrgMinimaMiniscriptFunctionsMathsCEIL_init(), create_OrgMinimaMiniscriptFunctionsMathsFLOOR_init(), create_OrgMinimaMiniscriptFunctionsMathsMAX_init(), create_OrgMinimaMiniscriptFunctionsMathsMIN_init(), create_OrgMinimaMiniscriptFunctionsMathsDEC_init(), create_OrgMinimaMiniscriptFunctionsMathsINC_init(), create_OrgMinimaMiniscriptFunctionsShaSHA3_init(), create_OrgMinimaMiniscriptFunctionsShaSHA2_init(), create_OrgMinimaMiniscriptFunctionsShaCHAINSHA_init(), create_OrgMinimaMiniscriptFunctionsMathsBITSET_init(), create_OrgMinimaMiniscriptFunctionsMathsBITGET_init(), create_OrgMinimaMiniscriptFunctionsShaADDR_init(), create_OrgMinimaMiniscriptFunctionsSigsSIGNEDBY_init(), create_OrgMinimaMiniscriptFunctionsSigsMULTISIG_init(), create_OrgMinimaMiniscriptFunctionsSigsCHECKSIG_init(), create_OrgMinimaMiniscriptFunctionsTxnOutputGETOUTADDR_init(), create_OrgMinimaMiniscriptFunctionsTxnOutputGETOUTAMT_init(), create_OrgMinimaMiniscriptFunctionsTxnOutputGETOUTTOK_init(), create_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_init(), create_OrgMinimaMiniscriptFunctionsTxnSTATE_init(), create_OrgMinimaMiniscriptFunctionsTxnPREVSTATE_init() } count:32 type:OrgMinimaMiniscriptFunctionsMinimaFunction_class_()]);
    J2OBJC_SET_INITIALIZED(OrgMinimaMiniscriptFunctionsMinimaFunction)
  }
}

@end

void OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(OrgMinimaMiniscriptFunctionsMinimaFunction *self, NSString *zName) {
  NSObject_init(self);
  JreStrongAssign(&self->mName_, [((NSString *) nil_chk(zName)) uppercaseString]);
  JreStrongAssignAndConsume(&self->mParameters_, new_JavaUtilArrayList_init());
}

OrgMinimaMiniscriptFunctionsMinimaFunction *OrgMinimaMiniscriptFunctionsMinimaFunction_getFunctionWithNSString_(NSString *zFunction) {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initialize();
  {
    IOSObjectArray *a__ = OrgMinimaMiniscriptFunctionsMinimaFunction_ALL_FUNCTIONS;
    OrgMinimaMiniscriptFunctionsMinimaFunction * const *b__ = ((IOSObjectArray *) nil_chk(a__))->buffer_;
    OrgMinimaMiniscriptFunctionsMinimaFunction * const *e__ = b__ + a__->size_;
    while (b__ < e__) {
      OrgMinimaMiniscriptFunctionsMinimaFunction *func = *b__++;
      if ([((NSString *) nil_chk([((OrgMinimaMiniscriptFunctionsMinimaFunction *) nil_chk(func)) getName])) java_equalsIgnoreCase:zFunction]) {
        return [func getNewFunction];
      }
    }
  }
  @throw create_OrgMinimaMiniscriptExceptionsMinimaParseException_initWithNSString_(JreStrcat("$$", @"Invalid Function : ", zFunction));
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptFunctionsMinimaFunction)

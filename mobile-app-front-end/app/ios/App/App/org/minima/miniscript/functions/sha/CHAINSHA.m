//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/sha/CHAINSHA.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/ByteArrayInputStream.h"
#include "java/io/DataInputStream.h"
#include "java/io/IOException.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/exceptions/ExecutionException.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/functions/sha/CHAINSHA.h"
#include "org/minima/miniscript/values/HEXValue.h"
#include "org/minima/miniscript/values/Value.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/utils/Crypto.h"

@implementation OrgMinimaMiniscriptFunctionsShaCHAINSHA

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaMiniscriptFunctionsShaCHAINSHA_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  OrgMinimaMiniscriptValuesHEXValue *input = (OrgMinimaMiniscriptValuesHEXValue *) cast_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaMiniscriptContract:zContract], [OrgMinimaMiniscriptValuesHEXValue class]);
  OrgMinimaMiniscriptValuesHEXValue *chain = (OrgMinimaMiniscriptValuesHEXValue *) cast_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:1])) getValueWithOrgMinimaMiniscriptContract:zContract], [OrgMinimaMiniscriptValuesHEXValue class]);
  IOSByteArray *indata = [((OrgMinimaMiniscriptValuesHEXValue *) nil_chk(input)) getRawData];
  IOSByteArray *chdata = [((OrgMinimaMiniscriptValuesHEXValue *) nil_chk(chain)) getRawData];
  if (((IOSByteArray *) nil_chk(indata))->size_ != 32) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(@"Input data must be 32 bytes long.");
  }
  if (((IOSByteArray *) nil_chk(chdata))->size_ % 33 != 0) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(@"Chain data not a multiple of 33 bytes long.");
  }
  jint loop = chdata->size_ / 33;
  OrgMinimaObjectsBaseMiniHash *total = create_OrgMinimaObjectsBaseMiniHash_initWithByteArray_(indata);
  JavaIoByteArrayInputStream *bais = create_JavaIoByteArrayInputStream_initWithByteArray_(chdata);
  JavaIoDataInputStream *dis = create_JavaIoDataInputStream_initWithJavaIoInputStream_(bais);
  for (jint i = 0; i < loop; i++) {
    OrgMinimaObjectsBaseMiniByte *leftrigt = OrgMinimaObjectsBaseMiniByte_ReadFromStreamWithJavaIoDataInputStream_(dis);
    OrgMinimaObjectsBaseMiniHash *data = OrgMinimaObjectsBaseMiniHash_ReadFromStreamWithJavaIoDataInputStream_(dis);
    if ([((OrgMinimaObjectsBaseMiniByte *) nil_chk(leftrigt)) isTrue]) {
      total = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectsWithOrgMinimaUtilsStreamable:data withOrgMinimaUtilsStreamable:total];
    }
    else {
      total = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectsWithOrgMinimaUtilsStreamable:total withOrgMinimaUtilsStreamable:data];
    }
  }
  @try {
    [dis close];
  }
  @catch (JavaIoIOException *e) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$@", @"Strange IO Exception at CHAINSHA !? ", e));
  }
  return create_OrgMinimaMiniscriptValuesHEXValue_initWithByteArray_([((OrgMinimaObjectsBaseMiniHash *) nil_chk(total)) getData]);
}

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaMiniscriptFunctionsShaCHAINSHA_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptFunctionsMinimaFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(runFunctionWithOrgMinimaMiniscriptContract:);
  methods[2].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "runFunction", "LOrgMinimaMiniscriptContract;", "LOrgMinimaMiniscriptExceptionsExecutionException;" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptFunctionsShaCHAINSHA = { "CHAINSHA", "org.minima.miniscript.functions.sha", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptFunctionsShaCHAINSHA;
}

@end

void OrgMinimaMiniscriptFunctionsShaCHAINSHA_init(OrgMinimaMiniscriptFunctionsShaCHAINSHA *self) {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(self, @"CHAINSHA");
}

OrgMinimaMiniscriptFunctionsShaCHAINSHA *new_OrgMinimaMiniscriptFunctionsShaCHAINSHA_init() {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptFunctionsShaCHAINSHA, init)
}

OrgMinimaMiniscriptFunctionsShaCHAINSHA *create_OrgMinimaMiniscriptFunctionsShaCHAINSHA_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptFunctionsShaCHAINSHA, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptFunctionsShaCHAINSHA)

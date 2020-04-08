//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/proofs/ScriptProof.java
//

#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "java/io/IOException.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/objects/Address.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/objects/base/MiniString.h"
#include "org/minima/objects/proofs/Proof.h"
#include "org/minima/objects/proofs/ScriptProof.h"
#include "org/minima/utils/json/JSONObject.h"

@interface OrgMinimaObjectsProofsScriptProof ()

- (instancetype)init;

@end

__attribute__((unused)) static void OrgMinimaObjectsProofsScriptProof_init(OrgMinimaObjectsProofsScriptProof *self);

__attribute__((unused)) static OrgMinimaObjectsProofsScriptProof *new_OrgMinimaObjectsProofsScriptProof_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsProofsScriptProof *create_OrgMinimaObjectsProofsScriptProof_init(void);

@implementation OrgMinimaObjectsProofsScriptProof

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsProofsScriptProof_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithNSString:(NSString *)zScript {
  OrgMinimaObjectsProofsScriptProof_initWithNSString_(self, zScript);
  return self;
}

- (instancetype)initWithNSString:(NSString *)zScript
                    withNSString:(NSString *)zChainSHAProof {
  OrgMinimaObjectsProofsScriptProof_initWithNSString_withNSString_(self, zScript, zChainSHAProof);
  return self;
}

- (OrgMinimaObjectsBaseMiniString *)getScript {
  return mScript_;
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *json = create_OrgMinimaUtilsJsonJSONObject_init();
  [json putWithId:@"script" withId:[((OrgMinimaObjectsBaseMiniString *) nil_chk(mScript_)) description]];
  [json putWithId:@"proof" withId:[super toJSON]];
  return json;
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((OrgMinimaObjectsBaseMiniString *) nil_chk(mScript_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [super writeDataStreamWithJavaIoDataOutputStream:zOut];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  JreStrongAssign(&mScript_, OrgMinimaObjectsBaseMiniString_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  [super readDataStreamWithJavaIoDataInputStream:zIn];
}

+ (OrgMinimaObjectsProofsScriptProof *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsProofsScriptProof_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mScript_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 2, 3, 4, -1, -1, -1 },
    { NULL, "V", 0x1, 5, 6, 4, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsProofsScriptProof;", 0x9, 7, 6, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithNSString:);
  methods[2].selector = @selector(initWithNSString:withNSString:);
  methods[3].selector = @selector(getScript);
  methods[4].selector = @selector(toJSON);
  methods[5].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[6].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[7].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mScript_", "LOrgMinimaObjectsBaseMiniString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LNSString;", "LNSString;LNSString;", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream" };
  static const J2ObjcClassInfo _OrgMinimaObjectsProofsScriptProof = { "ScriptProof", "org.minima.objects.proofs", ptrTable, methods, fields, 7, 0x1, 8, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsProofsScriptProof;
}

@end

void OrgMinimaObjectsProofsScriptProof_init(OrgMinimaObjectsProofsScriptProof *self) {
  OrgMinimaObjectsProofsProof_init(self);
}

OrgMinimaObjectsProofsScriptProof *new_OrgMinimaObjectsProofsScriptProof_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsProofsScriptProof, init)
}

OrgMinimaObjectsProofsScriptProof *create_OrgMinimaObjectsProofsScriptProof_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsProofsScriptProof, init)
}

void OrgMinimaObjectsProofsScriptProof_initWithNSString_(OrgMinimaObjectsProofsScriptProof *self, NSString *zScript) {
  OrgMinimaObjectsProofsScriptProof_initWithNSString_withNSString_(self, zScript, @"");
}

OrgMinimaObjectsProofsScriptProof *new_OrgMinimaObjectsProofsScriptProof_initWithNSString_(NSString *zScript) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsProofsScriptProof, initWithNSString_, zScript)
}

OrgMinimaObjectsProofsScriptProof *create_OrgMinimaObjectsProofsScriptProof_initWithNSString_(NSString *zScript) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsProofsScriptProof, initWithNSString_, zScript)
}

void OrgMinimaObjectsProofsScriptProof_initWithNSString_withNSString_(OrgMinimaObjectsProofsScriptProof *self, NSString *zScript, NSString *zChainSHAProof) {
  OrgMinimaObjectsProofsProof_init(self);
  JreStrongAssignAndConsume(&self->mScript_, new_OrgMinimaObjectsBaseMiniString_initWithNSString_(OrgMinimaMiniscriptContract_cleanScriptWithNSString_(zScript)));
  OrgMinimaObjectsAddress *addr = create_OrgMinimaObjectsAddress_initWithNSString_([self->mScript_ description]);
  [self setDataWithOrgMinimaObjectsBaseMiniHash:[addr getAddressData]];
  [self setProofWithOrgMinimaObjectsBaseMiniData:create_OrgMinimaObjectsBaseMiniData_initWithNSString_(zChainSHAProof)];
  [self finalizeHash];
}

OrgMinimaObjectsProofsScriptProof *new_OrgMinimaObjectsProofsScriptProof_initWithNSString_withNSString_(NSString *zScript, NSString *zChainSHAProof) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsProofsScriptProof, initWithNSString_withNSString_, zScript, zChainSHAProof)
}

OrgMinimaObjectsProofsScriptProof *create_OrgMinimaObjectsProofsScriptProof_initWithNSString_withNSString_(NSString *zScript, NSString *zChainSHAProof) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsProofsScriptProof, initWithNSString_withNSString_, zScript, zChainSHAProof)
}

OrgMinimaObjectsProofsScriptProof *OrgMinimaObjectsProofsScriptProof_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsProofsScriptProof_initialize();
  OrgMinimaObjectsProofsScriptProof *proof = create_OrgMinimaObjectsProofsScriptProof_init();
  @try {
    [proof readDataStreamWithJavaIoDataInputStream:zIn];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
  return proof;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsProofsScriptProof)

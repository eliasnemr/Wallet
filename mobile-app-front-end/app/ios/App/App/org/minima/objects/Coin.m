//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/Coin.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/utils/json/JSONObject.h"

@interface OrgMinimaObjectsCoin ()

- (instancetype)init;

@end

__attribute__((unused)) static void OrgMinimaObjectsCoin_init(OrgMinimaObjectsCoin *self);

__attribute__((unused)) static OrgMinimaObjectsCoin *new_OrgMinimaObjectsCoin_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsCoin *create_OrgMinimaObjectsCoin_init(void);

J2OBJC_INITIALIZED_DEFN(OrgMinimaObjectsCoin)

OrgMinimaObjectsBaseMiniHash *OrgMinimaObjectsCoin_MINIMA_TOKENID;
OrgMinimaObjectsBaseMiniHash *OrgMinimaObjectsCoin_COINID_OUTPUT;
OrgMinimaObjectsBaseMiniHash *OrgMinimaObjectsCoin_TOKENID_CREATE;

@implementation OrgMinimaObjectsCoin

- (instancetype)initWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zCoinID
                    withOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zAmount
                    withOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zTokenID {
  OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_(self, zCoinID, zAddress, zAmount, zTokenID);
  return self;
}

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsCoin_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaObjectsBaseMiniHash *)getCoinID {
  return mCoinID_;
}

- (OrgMinimaObjectsBaseMiniHash *)getAddress {
  return mAddress_;
}

- (OrgMinimaObjectsBaseMiniNumber *)getAmount {
  return mAmount_;
}

- (OrgMinimaObjectsBaseMiniHash *)getTokenID {
  return mTokenID_;
}

+ (OrgMinimaObjectsBaseMiniHash *)getTokenCreationIDWithInt:(jint)zDecimalPlaces {
  return OrgMinimaObjectsCoin_getTokenCreationIDWithInt_(zDecimalPlaces);
}

- (NSString *)description {
  return [((OrgMinimaUtilsJsonJSONObject *) nil_chk([self toJSON])) description];
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *obj = create_OrgMinimaUtilsJsonJSONObject_init();
  [obj putWithId:@"coinid" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(mCoinID_)) description]];
  [obj putWithId:@"address" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddress_)) description]];
  [obj putWithId:@"amount" withId:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(mAmount_)) description]];
  [obj putWithId:@"tokenid" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(mTokenID_)) description]];
  return obj;
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mCoinID_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddress_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(mAmount_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mTokenID_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  JreStrongAssign(&mCoinID_, OrgMinimaObjectsBaseMiniHash_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  JreStrongAssign(&mAddress_, OrgMinimaObjectsBaseMiniHash_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  JreStrongAssign(&mAmount_, OrgMinimaObjectsBaseMiniNumber_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  JreStrongAssign(&mTokenID_, OrgMinimaObjectsBaseMiniHash_ReadFromStreamWithJavaIoDataInputStream_(zIn));
}

+ (OrgMinimaObjectsCoin *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsCoin_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mCoinID_);
  RELEASE_(mAddress_);
  RELEASE_(mAmount_);
  RELEASE_(mTokenID_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x9, 1, 2, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 3, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, 6, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 8, 6, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsCoin;", 0x9, 9, 8, 6, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaObjectsBaseMiniHash:withOrgMinimaObjectsBaseMiniHash:withOrgMinimaObjectsBaseMiniNumber:withOrgMinimaObjectsBaseMiniHash:);
  methods[1].selector = @selector(init);
  methods[2].selector = @selector(getCoinID);
  methods[3].selector = @selector(getAddress);
  methods[4].selector = @selector(getAmount);
  methods[5].selector = @selector(getTokenID);
  methods[6].selector = @selector(getTokenCreationIDWithInt:);
  methods[7].selector = @selector(description);
  methods[8].selector = @selector(toJSON);
  methods[9].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[10].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[11].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "MINIMA_TOKENID", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "COINID_OUTPUT", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x19, -1, 11, -1, -1 },
    { "TOKENID_CREATE", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x19, -1, 12, -1, -1 },
    { "mCoinID_", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mAddress_", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mAmount_", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mTokenID_", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaObjectsBaseMiniHash;LOrgMinimaObjectsBaseMiniHash;LOrgMinimaObjectsBaseMiniNumber;LOrgMinimaObjectsBaseMiniHash;", "getTokenCreationID", "I", "toString", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream", &OrgMinimaObjectsCoin_MINIMA_TOKENID, &OrgMinimaObjectsCoin_COINID_OUTPUT, &OrgMinimaObjectsCoin_TOKENID_CREATE };
  static const J2ObjcClassInfo _OrgMinimaObjectsCoin = { "Coin", "org.minima.objects", ptrTable, methods, fields, 7, 0x1, 12, 7, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsCoin;
}

+ (void)initialize {
  if (self == [OrgMinimaObjectsCoin class]) {
    JreStrongAssignAndConsume(&OrgMinimaObjectsCoin_MINIMA_TOKENID, new_OrgMinimaObjectsBaseMiniHash_initWithNSString_(@"0x00"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsCoin_COINID_OUTPUT, new_OrgMinimaObjectsBaseMiniHash_initWithNSString_(@"0x00"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsCoin_TOKENID_CREATE, new_OrgMinimaObjectsBaseMiniHash_initWithNSString_(@"0xFF"));
    J2OBJC_SET_INITIALIZED(OrgMinimaObjectsCoin)
  }
}

@end

void OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsCoin *self, OrgMinimaObjectsBaseMiniHash *zCoinID, OrgMinimaObjectsBaseMiniHash *zAddress, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniHash *zTokenID) {
  NSObject_init(self);
  JreStrongAssign(&self->mCoinID_, zCoinID);
  JreStrongAssign(&self->mAddress_, zAddress);
  JreStrongAssign(&self->mAmount_, zAmount);
  JreStrongAssign(&self->mTokenID_, zTokenID);
}

OrgMinimaObjectsCoin *new_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsBaseMiniHash *zCoinID, OrgMinimaObjectsBaseMiniHash *zAddress, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniHash *zTokenID) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsCoin, initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_, zCoinID, zAddress, zAmount, zTokenID)
}

OrgMinimaObjectsCoin *create_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsBaseMiniHash *zCoinID, OrgMinimaObjectsBaseMiniHash *zAddress, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniHash *zTokenID) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsCoin, initWithOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniHash_, zCoinID, zAddress, zAmount, zTokenID)
}

void OrgMinimaObjectsCoin_init(OrgMinimaObjectsCoin *self) {
  NSObject_init(self);
}

OrgMinimaObjectsCoin *new_OrgMinimaObjectsCoin_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsCoin, init)
}

OrgMinimaObjectsCoin *create_OrgMinimaObjectsCoin_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsCoin, init)
}

OrgMinimaObjectsBaseMiniHash *OrgMinimaObjectsCoin_getTokenCreationIDWithInt_(jint zDecimalPlaces) {
  OrgMinimaObjectsCoin_initialize();
  jint totplaces = zDecimalPlaces;
  if (totplaces > 255) {
    totplaces = 255;
  }
  OrgMinimaObjectsBaseMiniByte *tot = create_OrgMinimaObjectsBaseMiniByte_initWithInt_(totplaces);
  IOSByteArray *data = [IOSByteArray arrayWithLength:1];
  *IOSByteArray_GetRef(data, 0) = [tot getByteValue];
  return create_OrgMinimaObjectsBaseMiniHash_initWithByteArray_(data);
}

OrgMinimaObjectsCoin *OrgMinimaObjectsCoin_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsCoin_initialize();
  OrgMinimaObjectsCoin *coin = create_OrgMinimaObjectsCoin_init();
  [coin readDataStreamWithJavaIoDataInputStream:zIn];
  return coin;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsCoin)

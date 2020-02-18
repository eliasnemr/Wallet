//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/PubPrivKey.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaObjectsPubPrivKey")
#ifdef RESTRICT_OrgMinimaObjectsPubPrivKey
#define INCLUDE_ALL_OrgMinimaObjectsPubPrivKey 0
#else
#define INCLUDE_ALL_OrgMinimaObjectsPubPrivKey 1
#endif
#undef RESTRICT_OrgMinimaObjectsPubPrivKey

#if !defined (OrgMinimaObjectsPubPrivKey_) && (INCLUDE_ALL_OrgMinimaObjectsPubPrivKey || defined(INCLUDE_OrgMinimaObjectsPubPrivKey))
#define OrgMinimaObjectsPubPrivKey_

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsBaseMiniHash;

@interface OrgMinimaObjectsPubPrivKey : NSObject < OrgMinimaUtilsStreamable > {
 @public
  OrgMinimaObjectsBaseMiniData *mPrivateSeed_;
  OrgMinimaObjectsBaseMiniData *mPublicKey_;
}

#pragma mark Public

- (instancetype)init;

- (instancetype)initWithBoolean:(jboolean)empty;

- (instancetype)initWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zPrivateSeed;

- (OrgMinimaObjectsBaseMiniData *)getPrivateSeed;

- (OrgMinimaObjectsBaseMiniData *)getPublicKey;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (OrgMinimaObjectsBaseMiniData *)signWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zData;

- (NSString *)description;

+ (jboolean)verifyWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zPubKey
                  withOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zData
                  withOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zSignature;

- (jboolean)verifyWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zData
                  withOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zSignature;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaObjectsPubPrivKey)

J2OBJC_FIELD_SETTER(OrgMinimaObjectsPubPrivKey, mPrivateSeed_, OrgMinimaObjectsBaseMiniData *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsPubPrivKey, mPublicKey_, OrgMinimaObjectsBaseMiniData *)

FOUNDATION_EXPORT void OrgMinimaObjectsPubPrivKey_init(OrgMinimaObjectsPubPrivKey *self);

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *new_OrgMinimaObjectsPubPrivKey_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *create_OrgMinimaObjectsPubPrivKey_init(void);

FOUNDATION_EXPORT void OrgMinimaObjectsPubPrivKey_initWithOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsPubPrivKey *self, OrgMinimaObjectsBaseMiniData *zPrivateSeed);

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *new_OrgMinimaObjectsPubPrivKey_initWithOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsBaseMiniData *zPrivateSeed) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *create_OrgMinimaObjectsPubPrivKey_initWithOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsBaseMiniData *zPrivateSeed);

FOUNDATION_EXPORT void OrgMinimaObjectsPubPrivKey_initWithBoolean_(OrgMinimaObjectsPubPrivKey *self, jboolean empty);

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *new_OrgMinimaObjectsPubPrivKey_initWithBoolean_(jboolean empty) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsPubPrivKey *create_OrgMinimaObjectsPubPrivKey_initWithBoolean_(jboolean empty);

FOUNDATION_EXPORT jboolean OrgMinimaObjectsPubPrivKey_verifyWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniHash_withOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsBaseMiniData *zPubKey, OrgMinimaObjectsBaseMiniHash *zData, OrgMinimaObjectsBaseMiniData *zSignature);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaObjectsPubPrivKey)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaObjectsPubPrivKey")

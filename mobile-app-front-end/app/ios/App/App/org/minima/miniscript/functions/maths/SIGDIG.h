//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/maths/SIGDIG.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsSIGDIG")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsMathsSIGDIG
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsSIGDIG 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsSIGDIG 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsMathsSIGDIG

#if !defined (OrgMinimaMiniscriptFunctionsMathsSIGDIG_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsSIGDIG || defined(INCLUDE_OrgMinimaMiniscriptFunctionsMathsSIGDIG))
#define OrgMinimaMiniscriptFunctionsMathsSIGDIG_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsMathsSIGDIG : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsMathsSIGDIG)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsMathsSIGDIG_init(OrgMinimaMiniscriptFunctionsMathsSIGDIG *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsMathsSIGDIG *new_OrgMinimaMiniscriptFunctionsMathsSIGDIG_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsMathsSIGDIG *create_OrgMinimaMiniscriptFunctionsMathsSIGDIG_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsMathsSIGDIG)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsSIGDIG")

//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/state/PREVSTATE.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStatePREVSTATE")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsStatePREVSTATE
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStatePREVSTATE 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStatePREVSTATE 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsStatePREVSTATE

#if !defined (OrgMinimaMiniscriptFunctionsStatePREVSTATE_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStatePREVSTATE || defined(INCLUDE_OrgMinimaMiniscriptFunctionsStatePREVSTATE))
#define OrgMinimaMiniscriptFunctionsStatePREVSTATE_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsStatePREVSTATE : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsStatePREVSTATE)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsStatePREVSTATE_init(OrgMinimaMiniscriptFunctionsStatePREVSTATE *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsStatePREVSTATE *new_OrgMinimaMiniscriptFunctionsStatePREVSTATE_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsStatePREVSTATE *create_OrgMinimaMiniscriptFunctionsStatePREVSTATE_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsStatePREVSTATE)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStatePREVSTATE")

//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/state/DYNSTATE.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStateDYNSTATE")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsStateDYNSTATE
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStateDYNSTATE 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStateDYNSTATE 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsStateDYNSTATE

#if !defined (OrgMinimaMiniscriptFunctionsStateDYNSTATE_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStateDYNSTATE || defined(INCLUDE_OrgMinimaMiniscriptFunctionsStateDYNSTATE))
#define OrgMinimaMiniscriptFunctionsStateDYNSTATE_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsStateDYNSTATE : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsStateDYNSTATE)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsStateDYNSTATE_init(OrgMinimaMiniscriptFunctionsStateDYNSTATE *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsStateDYNSTATE *new_OrgMinimaMiniscriptFunctionsStateDYNSTATE_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsStateDYNSTATE *create_OrgMinimaMiniscriptFunctionsStateDYNSTATE_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsStateDYNSTATE)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsStateDYNSTATE")

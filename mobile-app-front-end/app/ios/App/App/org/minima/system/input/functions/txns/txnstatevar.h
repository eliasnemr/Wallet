//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/txns/txnstatevar.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnstatevar")
#ifdef RESTRICT_OrgMinimaSystemInputFunctionsTxnsTxnstatevar
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnstatevar 0
#else
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnstatevar 1
#endif
#undef RESTRICT_OrgMinimaSystemInputFunctionsTxnsTxnstatevar

#if !defined (OrgMinimaSystemInputFunctionsTxnstxnstatevar_) && (INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnstatevar || defined(INCLUDE_OrgMinimaSystemInputFunctionsTxnstxnstatevar))
#define OrgMinimaSystemInputFunctionsTxnstxnstatevar_

#define RESTRICT_OrgMinimaSystemInputCommandFunction 1
#define INCLUDE_OrgMinimaSystemInputCommandFunction 1
#include "org/minima/system/input/CommandFunction.h"

@class IOSObjectArray;

@interface OrgMinimaSystemInputFunctionsTxnstxnstatevar : OrgMinimaSystemInputCommandFunction

#pragma mark Public

- (instancetype)init;

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput;

- (OrgMinimaSystemInputCommandFunction *)getNewFunction;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemInputFunctionsTxnstxnstatevar)

FOUNDATION_EXPORT void OrgMinimaSystemInputFunctionsTxnstxnstatevar_init(OrgMinimaSystemInputFunctionsTxnstxnstatevar *self);

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsTxnstxnstatevar *new_OrgMinimaSystemInputFunctionsTxnstxnstatevar_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsTxnstxnstatevar *create_OrgMinimaSystemInputFunctionsTxnstxnstatevar_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemInputFunctionsTxnstxnstatevar)

@compatibility_alias OrgMinimaSystemInputFunctionsTxnsTxnstatevar OrgMinimaSystemInputFunctionsTxnstxnstatevar;

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnstatevar")

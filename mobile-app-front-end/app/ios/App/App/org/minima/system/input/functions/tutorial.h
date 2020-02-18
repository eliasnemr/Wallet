//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/tutorial.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTutorial")
#ifdef RESTRICT_OrgMinimaSystemInputFunctionsTutorial
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTutorial 0
#else
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTutorial 1
#endif
#undef RESTRICT_OrgMinimaSystemInputFunctionsTutorial

#if !defined (OrgMinimaSystemInputFunctionstutorial_) && (INCLUDE_ALL_OrgMinimaSystemInputFunctionsTutorial || defined(INCLUDE_OrgMinimaSystemInputFunctionstutorial))
#define OrgMinimaSystemInputFunctionstutorial_

#define RESTRICT_OrgMinimaSystemInputCommandFunction 1
#define INCLUDE_OrgMinimaSystemInputCommandFunction 1
#include "org/minima/system/input/CommandFunction.h"

@class IOSObjectArray;

@interface OrgMinimaSystemInputFunctionstutorial : OrgMinimaSystemInputCommandFunction

#pragma mark Public

- (instancetype)init;

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput;

- (NSString *)getLineNumberWithInt:(jint)zLine;

- (OrgMinimaSystemInputCommandFunction *)getNewFunction;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemInputFunctionstutorial)

inline NSString *OrgMinimaSystemInputFunctionstutorial_get_TUTORIAL_TEXT(void);
inline NSString *OrgMinimaSystemInputFunctionstutorial_set_TUTORIAL_TEXT(NSString *value);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemInputFunctionstutorial_TUTORIAL_TEXT;
J2OBJC_STATIC_FIELD_OBJ(OrgMinimaSystemInputFunctionstutorial, TUTORIAL_TEXT, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemInputFunctionstutorial_init(OrgMinimaSystemInputFunctionstutorial *self);

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionstutorial *new_OrgMinimaSystemInputFunctionstutorial_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionstutorial *create_OrgMinimaSystemInputFunctionstutorial_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemInputFunctionstutorial)

@compatibility_alias OrgMinimaSystemInputFunctionsTutorial OrgMinimaSystemInputFunctionstutorial;

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTutorial")

//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/Difficulty.java
//

#include "J2ObjC_source.h"
#include "java/math/BigInteger.h"
#include "org/minima/objects/Difficulty.h"
#include "org/minima/objects/base/MiniHash.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaObjectsDifficulty)

JavaMathBigInteger *OrgMinimaObjectsDifficulty_MAX_VAL;
JavaMathBigInteger *OrgMinimaObjectsDifficulty_DIFF_TWO;

@implementation OrgMinimaObjectsDifficulty

- (instancetype)initWithInt:(jint)zDifficulty {
  OrgMinimaObjectsDifficulty_initWithInt_(self, zDifficulty);
  return self;
}

- (jboolean)isOKWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zValue {
  return [((JavaMathBigInteger *) nil_chk([((OrgMinimaObjectsBaseMiniHash *) nil_chk(zValue)) getDataVaue])) compareToWithId:mDifficulty_] <= 0;
}

- (NSString *)description {
  return JreStrcat("$$", @"0x", [((JavaMathBigInteger *) nil_chk(mDifficulty_)) toStringWithInt:16]);
}

- (void)dealloc {
  RELEASE_(mDifficulty_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 3, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithInt:);
  methods[1].selector = @selector(isOKWithOrgMinimaObjectsBaseMiniHash:);
  methods[2].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "MAX_VAL", "LJavaMathBigInteger;", .constantValue.asLong = 0, 0x19, -1, 4, -1, -1 },
    { "DIFF_TWO", "LJavaMathBigInteger;", .constantValue.asLong = 0, 0x19, -1, 5, -1, -1 },
    { "mValue_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mDifficulty_", "LJavaMathBigInteger;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "I", "isOK", "LOrgMinimaObjectsBaseMiniHash;", "toString", &OrgMinimaObjectsDifficulty_MAX_VAL, &OrgMinimaObjectsDifficulty_DIFF_TWO };
  static const J2ObjcClassInfo _OrgMinimaObjectsDifficulty = { "Difficulty", "org.minima.objects", ptrTable, methods, fields, 7, 0x1, 3, 4, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsDifficulty;
}

+ (void)initialize {
  if (self == [OrgMinimaObjectsDifficulty class]) {
    JreStrongAssignAndConsume(&OrgMinimaObjectsDifficulty_MAX_VAL, new_JavaMathBigInteger_initWithNSString_withInt_(@"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16));
    JreStrongAssignAndConsume(&OrgMinimaObjectsDifficulty_DIFF_TWO, new_JavaMathBigInteger_initWithNSString_(@"2"));
    J2OBJC_SET_INITIALIZED(OrgMinimaObjectsDifficulty)
  }
}

@end

void OrgMinimaObjectsDifficulty_initWithInt_(OrgMinimaObjectsDifficulty *self, jint zDifficulty) {
  NSObject_init(self);
  self->mValue_ = zDifficulty;
  JreStrongAssign(&self->mDifficulty_, [((JavaMathBigInteger *) nil_chk(OrgMinimaObjectsDifficulty_MAX_VAL)) divideWithJavaMathBigInteger:[((JavaMathBigInteger *) nil_chk(OrgMinimaObjectsDifficulty_DIFF_TWO)) powWithInt:zDifficulty]]);
}

OrgMinimaObjectsDifficulty *new_OrgMinimaObjectsDifficulty_initWithInt_(jint zDifficulty) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsDifficulty, initWithInt_, zDifficulty)
}

OrgMinimaObjectsDifficulty *create_OrgMinimaObjectsDifficulty_initWithInt_(jint zDifficulty) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsDifficulty, initWithInt_, zDifficulty)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsDifficulty)

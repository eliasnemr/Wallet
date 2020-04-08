//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/digest/WinternitzOTSignature.java
//

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/lang/Math.h"
#include "java/lang/System.h"
#include "org/minima/utils/digest/Digest.h"
#include "org/minima/utils/digest/GMSSRandom.h"
#include "org/minima/utils/digest/WinternitzOTSignature.h"

@interface OrgMinimaUtilsDigestWinternitzOTSignature () {
 @public
  id<OrgMinimaUtilsDigestDigest> messDigestOTS_;
  jint mdsize_;
  jint keysize_;
  IOSObjectArray *privateKeyOTS_;
  jint w_;
  OrgMinimaUtilsDigestGMSSRandom *gmssRandom_;
  jint messagesize_;
  jint checksumsize_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaUtilsDigestWinternitzOTSignature, messDigestOTS_, id<OrgMinimaUtilsDigestDigest>)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsDigestWinternitzOTSignature, privateKeyOTS_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsDigestWinternitzOTSignature, gmssRandom_, OrgMinimaUtilsDigestGMSSRandom *)

@implementation OrgMinimaUtilsDigestWinternitzOTSignature

- (instancetype)initWithByteArray:(IOSByteArray *)seed0
   withOrgMinimaUtilsDigestDigest:(id<OrgMinimaUtilsDigestDigest>)digest
                          withInt:(jint)w {
  OrgMinimaUtilsDigestWinternitzOTSignature_initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_(self, seed0, digest, w);
  return self;
}

- (IOSObjectArray *)getPrivateKey {
  return privateKeyOTS_;
}

- (IOSByteArray *)getPublicKey {
  IOSByteArray *helppubKey = [IOSByteArray arrayWithLength:keysize_ * mdsize_];
  IOSByteArray *help = [IOSByteArray arrayWithLength:mdsize_];
  jint two_power_t = JreLShift32(1, w_);
  for (jint i = 0; i < keysize_; i++) {
    [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:IOSObjectArray_Get(nil_chk(privateKeyOTS_), i) withInt:0 withInt:((IOSByteArray *) nil_chk(IOSObjectArray_Get(privateKeyOTS_, i)))->size_];
    help = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
    [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:help withInt:0];
    for (jint j = 2; j < two_power_t; j++) {
      [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:help withInt:0 withInt:help->size_];
      help = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
      [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:help withInt:0];
    }
    JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(help, 0, helppubKey, mdsize_ * i, mdsize_);
  }
  [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:helppubKey withInt:0 withInt:helppubKey->size_];
  IOSByteArray *tmp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
  [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:tmp withInt:0];
  return tmp;
}

- (IOSByteArray *)getSignatureWithByteArray:(IOSByteArray *)message {
  IOSByteArray *sign = [IOSByteArray arrayWithLength:keysize_ * mdsize_];
  IOSByteArray *hash_ = [IOSByteArray arrayWithLength:mdsize_];
  jint counter = 0;
  jint c = 0;
  jint test = 0;
  [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:message withInt:0 withInt:((IOSByteArray *) nil_chk(message))->size_];
  hash_ = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
  [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hash_ withInt:0];
  if (8 % w_ == 0) {
    jint d = 8 / w_;
    jint k = (JreLShift32(1, w_)) - 1;
    IOSByteArray *hlp = [IOSByteArray arrayWithLength:mdsize_];
    for (jint i = 0; i < hash_->size_; i++) {
      for (jint j = 0; j < d; j++) {
        test = IOSByteArray_Get(hash_, i) & k;
        c += test;
        JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
        while (test > 0) {
          [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
          hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
          [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
          test--;
        }
        JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
        *IOSByteArray_GetRef(hash_, i) = (jbyte) (JreURShift32(IOSByteArray_Get(hash_, i), w_));
        counter++;
      }
    }
    c = (JreLShift32(messagesize_, w_)) - c;
    for (jint i = 0; i < checksumsize_; i += w_) {
      test = c & k;
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      JreURShiftAssignInt(&c, w_);
      counter++;
    }
  }
  else if (w_ < 8) {
    jint d = mdsize_ / w_;
    jint k = (JreLShift32(1, w_)) - 1;
    IOSByteArray *hlp = [IOSByteArray arrayWithLength:mdsize_];
    jlong big8;
    jint ii = 0;
    for (jint i = 0; i < d; i++) {
      big8 = 0;
      for (jint j = 0; j < w_; j++) {
        big8 ^= JreLShift32((IOSByteArray_Get(hash_, ii) & (jint) 0xff), (JreLShift32(j, 3)));
        ii++;
      }
      for (jint j = 0; j < 8; j++) {
        test = (jint) (big8 & k);
        c += test;
        JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
        while (test > 0) {
          [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
          hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
          [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
          test--;
        }
        JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
        JreURShiftAssignLong(&big8, w_);
        counter++;
      }
    }
    d = mdsize_ % w_;
    big8 = 0;
    for (jint j = 0; j < d; j++) {
      big8 ^= JreLShift32((IOSByteArray_Get(hash_, ii) & (jint) 0xff), (JreLShift32(j, 3)));
      ii++;
    }
    JreLShiftAssignInt(&d, 3);
    for (jint j = 0; j < d; j += w_) {
      test = (jint) (big8 & k);
      c += test;
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      JreURShiftAssignLong(&big8, w_);
      counter++;
    }
    c = (JreLShift32(messagesize_, w_)) - c;
    for (jint i = 0; i < checksumsize_; i += w_) {
      test = c & k;
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      JreURShiftAssignInt(&c, w_);
      counter++;
    }
  }
  else if (w_ < 57) {
    jint d = (JreLShift32(mdsize_, 3)) - w_;
    jint k = (JreLShift32(1, w_)) - 1;
    IOSByteArray *hlp = [IOSByteArray arrayWithLength:mdsize_];
    jlong big8;
    jlong test8;
    jint r = 0;
    jint s;
    jint f;
    jint rest;
    jint ii;
    while (r <= d) {
      s = JreURShift32(r, 3);
      rest = r % 8;
      r += w_;
      f = JreURShift32((r + 7), 3);
      big8 = 0;
      ii = 0;
      for (jint j = s; j < f; j++) {
        big8 ^= JreLShift32((IOSByteArray_Get(hash_, j) & (jint) 0xff), (JreLShift32(ii, 3)));
        ii++;
      }
      JreURShiftAssignLong(&big8, rest);
      test8 = (big8 & k);
      c += test8;
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test8 > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test8--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      counter++;
    }
    s = JreURShift32(r, 3);
    if (s < mdsize_) {
      rest = r % 8;
      big8 = 0;
      ii = 0;
      for (jint j = s; j < mdsize_; j++) {
        big8 ^= JreLShift32((IOSByteArray_Get(hash_, j) & (jint) 0xff), (JreLShift32(ii, 3)));
        ii++;
      }
      JreURShiftAssignLong(&big8, rest);
      test8 = (big8 & k);
      c += test8;
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test8 > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test8--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      counter++;
    }
    c = (JreLShift32(messagesize_, w_)) - c;
    for (jint i = 0; i < checksumsize_; i += w_) {
      test8 = (c & k);
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(nil_chk(privateKeyOTS_), counter), 0, hlp, 0, mdsize_);
      while (test8 > 0) {
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) updateWithByteArray:hlp withInt:0 withInt:hlp->size_];
        hlp = [IOSByteArray arrayWithLength:[((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) getDigestSize]];
        [((id<OrgMinimaUtilsDigestDigest>) nil_chk(messDigestOTS_)) doFinalWithByteArray:hlp withInt:0];
        test8--;
      }
      JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(hlp, 0, sign, counter * mdsize_, mdsize_);
      JreURShiftAssignInt(&c, w_);
      counter++;
    }
  }
  return sign;
}

- (jint)getLogWithInt:(jint)intValue {
  jint log = 1;
  jint i = 2;
  while (i < intValue) {
    JreLShiftAssignInt(&i, 1);
    log++;
  }
  return log;
}

- (void)dealloc {
  RELEASE_(messDigestOTS_);
  RELEASE_(privateKeyOTS_);
  RELEASE_(gmssRandom_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "[[B", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "[B", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "[B", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "I", 0x1, 3, 4, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithByteArray:withOrgMinimaUtilsDigestDigest:withInt:);
  methods[1].selector = @selector(getPrivateKey);
  methods[2].selector = @selector(getPublicKey);
  methods[3].selector = @selector(getSignatureWithByteArray:);
  methods[4].selector = @selector(getLogWithInt:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "messDigestOTS_", "LOrgMinimaUtilsDigestDigest;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mdsize_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "keysize_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "privateKeyOTS_", "[[B", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "w_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "gmssRandom_", "LOrgMinimaUtilsDigestGMSSRandom;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "messagesize_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "checksumsize_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "[BLOrgMinimaUtilsDigestDigest;I", "getSignature", "[B", "getLog", "I" };
  static const J2ObjcClassInfo _OrgMinimaUtilsDigestWinternitzOTSignature = { "WinternitzOTSignature", "org.minima.utils.digest", ptrTable, methods, fields, 7, 0x1, 5, 8, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsDigestWinternitzOTSignature;
}

@end

void OrgMinimaUtilsDigestWinternitzOTSignature_initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_(OrgMinimaUtilsDigestWinternitzOTSignature *self, IOSByteArray *seed0, id<OrgMinimaUtilsDigestDigest> digest, jint w) {
  NSObject_init(self);
  self->w_ = w;
  JreStrongAssign(&self->messDigestOTS_, digest);
  JreStrongAssignAndConsume(&self->gmssRandom_, new_OrgMinimaUtilsDigestGMSSRandom_initWithOrgMinimaUtilsDigestDigest_(self->messDigestOTS_));
  self->mdsize_ = [((id<OrgMinimaUtilsDigestDigest>) nil_chk(self->messDigestOTS_)) getDigestSize];
  jint mdsizeBit = JreLShift32(self->mdsize_, 3);
  self->messagesize_ = JreFpToInt(JavaLangMath_ceilWithDouble_((jdouble) (mdsizeBit) / (jdouble) w));
  self->checksumsize_ = [self getLogWithInt:(JreLShift32(self->messagesize_, w)) + 1];
  self->keysize_ = self->messagesize_ + JreFpToInt(JavaLangMath_ceilWithDouble_((jdouble) self->checksumsize_ / (jdouble) w));
  JreStrongAssignAndConsume(&self->privateKeyOTS_, [IOSByteArray newArrayWithDimensions:2 lengths:(jint[]){ self->keysize_, self->mdsize_ }]);
  IOSByteArray *dummy = [IOSByteArray arrayWithLength:self->mdsize_];
  JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(seed0, 0, dummy, 0, dummy->size_);
  for (jint i = 0; i < self->keysize_; i++) {
    IOSObjectArray_Set(nil_chk(self->privateKeyOTS_), i, [((OrgMinimaUtilsDigestGMSSRandom *) nil_chk(self->gmssRandom_)) nextSeedWithByteArray:dummy]);
  }
}

OrgMinimaUtilsDigestWinternitzOTSignature *new_OrgMinimaUtilsDigestWinternitzOTSignature_initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_(IOSByteArray *seed0, id<OrgMinimaUtilsDigestDigest> digest, jint w) {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsDigestWinternitzOTSignature, initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_, seed0, digest, w)
}

OrgMinimaUtilsDigestWinternitzOTSignature *create_OrgMinimaUtilsDigestWinternitzOTSignature_initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_(IOSByteArray *seed0, id<OrgMinimaUtilsDigestDigest> digest, jint w) {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsDigestWinternitzOTSignature, initWithByteArray_withOrgMinimaUtilsDigestDigest_withInt_, seed0, digest, w)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsDigestWinternitzOTSignature)

//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/digest/Pack.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "org/minima/utils/digest/Pack.h"

@implementation OrgMinimaUtilsDigestPack

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsDigestPack_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (jshort)bigEndianToShortWithByteArray:(IOSByteArray *)bs
                                withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_bigEndianToShortWithByteArray_withInt_(bs, off);
}

+ (jint)bigEndianToIntWithByteArray:(IOSByteArray *)bs
                            withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_(bs, off);
}

+ (void)bigEndianToIntWithByteArray:(IOSByteArray *)bs
                            withInt:(jint)off
                       withIntArray:(IOSIntArray *)ns {
  OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_withIntArray_(bs, off, ns);
}

+ (IOSByteArray *)intToBigEndianWithInt:(jint)n {
  return OrgMinimaUtilsDigestPack_intToBigEndianWithInt_(n);
}

+ (void)intToBigEndianWithInt:(jint)n
                withByteArray:(IOSByteArray *)bs
                      withInt:(jint)off {
  OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)intToBigEndianWithIntArray:(IOSIntArray *)ns {
  return OrgMinimaUtilsDigestPack_intToBigEndianWithIntArray_(ns);
}

+ (void)intToBigEndianWithIntArray:(IOSIntArray *)ns
                     withByteArray:(IOSByteArray *)bs
                           withInt:(jint)off {
  OrgMinimaUtilsDigestPack_intToBigEndianWithIntArray_withByteArray_withInt_(ns, bs, off);
}

+ (jlong)bigEndianToLongWithByteArray:(IOSByteArray *)bs
                              withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_bigEndianToLongWithByteArray_withInt_(bs, off);
}

+ (void)bigEndianToLongWithByteArray:(IOSByteArray *)bs
                             withInt:(jint)off
                       withLongArray:(IOSLongArray *)ns {
  OrgMinimaUtilsDigestPack_bigEndianToLongWithByteArray_withInt_withLongArray_(bs, off, ns);
}

+ (IOSByteArray *)longToBigEndianWithLong:(jlong)n {
  return OrgMinimaUtilsDigestPack_longToBigEndianWithLong_(n);
}

+ (void)longToBigEndianWithLong:(jlong)n
                  withByteArray:(IOSByteArray *)bs
                        withInt:(jint)off {
  OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)longToBigEndianWithLongArray:(IOSLongArray *)ns {
  return OrgMinimaUtilsDigestPack_longToBigEndianWithLongArray_(ns);
}

+ (void)longToBigEndianWithLongArray:(IOSLongArray *)ns
                       withByteArray:(IOSByteArray *)bs
                             withInt:(jint)off {
  OrgMinimaUtilsDigestPack_longToBigEndianWithLongArray_withByteArray_withInt_(ns, bs, off);
}

+ (void)longToBigEndianWithLong:(jlong)value
                  withByteArray:(IOSByteArray *)bs
                        withInt:(jint)off
                        withInt:(jint)bytes {
  OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_withInt_(value, bs, off, bytes);
}

+ (jshort)littleEndianToShortWithByteArray:(IOSByteArray *)bs
                                   withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_littleEndianToShortWithByteArray_withInt_(bs, off);
}

+ (jint)littleEndianToIntWithByteArray:(IOSByteArray *)bs
                               withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, off);
}

+ (void)littleEndianToIntWithByteArray:(IOSByteArray *)bs
                               withInt:(jint)off
                          withIntArray:(IOSIntArray *)ns {
  OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withIntArray_(bs, off, ns);
}

+ (void)littleEndianToIntWithByteArray:(IOSByteArray *)bs
                               withInt:(jint)bOff
                          withIntArray:(IOSIntArray *)ns
                               withInt:(jint)nOff
                               withInt:(jint)count {
  OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withIntArray_withInt_withInt_(bs, bOff, ns, nOff, count);
}

+ (IOSIntArray *)littleEndianToIntWithByteArray:(IOSByteArray *)bs
                                        withInt:(jint)off
                                        withInt:(jint)count {
  return OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withInt_(bs, off, count);
}

+ (IOSByteArray *)shortToLittleEndianWithShort:(jshort)n {
  return OrgMinimaUtilsDigestPack_shortToLittleEndianWithShort_(n);
}

+ (void)shortToLittleEndianWithShort:(jshort)n
                       withByteArray:(IOSByteArray *)bs
                             withInt:(jint)off {
  OrgMinimaUtilsDigestPack_shortToLittleEndianWithShort_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)shortToBigEndianWithShort:(jshort)n {
  return OrgMinimaUtilsDigestPack_shortToBigEndianWithShort_(n);
}

+ (void)shortToBigEndianWithShort:(jshort)n
                    withByteArray:(IOSByteArray *)bs
                          withInt:(jint)off {
  OrgMinimaUtilsDigestPack_shortToBigEndianWithShort_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)intToLittleEndianWithInt:(jint)n {
  return OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_(n);
}

+ (void)intToLittleEndianWithInt:(jint)n
                   withByteArray:(IOSByteArray *)bs
                         withInt:(jint)off {
  OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)intToLittleEndianWithIntArray:(IOSIntArray *)ns {
  return OrgMinimaUtilsDigestPack_intToLittleEndianWithIntArray_(ns);
}

+ (void)intToLittleEndianWithIntArray:(IOSIntArray *)ns
                        withByteArray:(IOSByteArray *)bs
                              withInt:(jint)off {
  OrgMinimaUtilsDigestPack_intToLittleEndianWithIntArray_withByteArray_withInt_(ns, bs, off);
}

+ (jlong)littleEndianToLongWithByteArray:(IOSByteArray *)bs
                                 withInt:(jint)off {
  return OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_(bs, off);
}

+ (void)littleEndianToLongWithByteArray:(IOSByteArray *)bs
                                withInt:(jint)off
                          withLongArray:(IOSLongArray *)ns {
  OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_withLongArray_(bs, off, ns);
}

+ (void)littleEndianToLongWithByteArray:(IOSByteArray *)bs
                                withInt:(jint)bsOff
                          withLongArray:(IOSLongArray *)ns
                                withInt:(jint)nsOff
                                withInt:(jint)nsLen {
  OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_withLongArray_withInt_withInt_(bs, bsOff, ns, nsOff, nsLen);
}

+ (IOSByteArray *)longToLittleEndianWithLong:(jlong)n {
  return OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_(n);
}

+ (void)longToLittleEndianWithLong:(jlong)n
                     withByteArray:(IOSByteArray *)bs
                           withInt:(jint)off {
  OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_withByteArray_withInt_(n, bs, off);
}

+ (IOSByteArray *)longToLittleEndianWithLongArray:(IOSLongArray *)ns {
  return OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_(ns);
}

+ (void)longToLittleEndianWithLongArray:(IOSLongArray *)ns
                          withByteArray:(IOSByteArray *)bs
                                withInt:(jint)off {
  OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_withByteArray_withInt_(ns, bs, off);
}

+ (void)longToLittleEndianWithLongArray:(IOSLongArray *)ns
                                withInt:(jint)nsOff
                                withInt:(jint)nsLen
                          withByteArray:(IOSByteArray *)bs
                                withInt:(jint)bsOff {
  OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_withInt_withInt_withByteArray_withInt_(ns, nsOff, nsLen, bs, bsOff);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "S", 0x9, 0, 1, -1, -1, -1, -1 },
    { NULL, "I", 0x9, 2, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 2, 3, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 4, 5, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 4, 6, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 4, 7, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 4, 8, -1, -1, -1, -1 },
    { NULL, "J", 0x9, 9, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 9, 10, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 11, 12, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 11, 13, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 11, 14, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 11, 15, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 11, 16, -1, -1, -1, -1 },
    { NULL, "S", 0x9, 17, 1, -1, -1, -1, -1 },
    { NULL, "I", 0x9, 18, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 18, 3, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 18, 19, -1, -1, -1, -1 },
    { NULL, "[I", 0x9, 18, 20, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 21, 22, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 21, 23, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 24, 22, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 24, 23, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 25, 5, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 25, 6, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 25, 7, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 25, 8, -1, -1, -1, -1 },
    { NULL, "J", 0x9, 26, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 26, 10, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 26, 27, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 28, 12, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 28, 13, -1, -1, -1, -1 },
    { NULL, "[B", 0x9, 28, 14, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 28, 15, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 28, 29, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(bigEndianToShortWithByteArray:withInt:);
  methods[2].selector = @selector(bigEndianToIntWithByteArray:withInt:);
  methods[3].selector = @selector(bigEndianToIntWithByteArray:withInt:withIntArray:);
  methods[4].selector = @selector(intToBigEndianWithInt:);
  methods[5].selector = @selector(intToBigEndianWithInt:withByteArray:withInt:);
  methods[6].selector = @selector(intToBigEndianWithIntArray:);
  methods[7].selector = @selector(intToBigEndianWithIntArray:withByteArray:withInt:);
  methods[8].selector = @selector(bigEndianToLongWithByteArray:withInt:);
  methods[9].selector = @selector(bigEndianToLongWithByteArray:withInt:withLongArray:);
  methods[10].selector = @selector(longToBigEndianWithLong:);
  methods[11].selector = @selector(longToBigEndianWithLong:withByteArray:withInt:);
  methods[12].selector = @selector(longToBigEndianWithLongArray:);
  methods[13].selector = @selector(longToBigEndianWithLongArray:withByteArray:withInt:);
  methods[14].selector = @selector(longToBigEndianWithLong:withByteArray:withInt:withInt:);
  methods[15].selector = @selector(littleEndianToShortWithByteArray:withInt:);
  methods[16].selector = @selector(littleEndianToIntWithByteArray:withInt:);
  methods[17].selector = @selector(littleEndianToIntWithByteArray:withInt:withIntArray:);
  methods[18].selector = @selector(littleEndianToIntWithByteArray:withInt:withIntArray:withInt:withInt:);
  methods[19].selector = @selector(littleEndianToIntWithByteArray:withInt:withInt:);
  methods[20].selector = @selector(shortToLittleEndianWithShort:);
  methods[21].selector = @selector(shortToLittleEndianWithShort:withByteArray:withInt:);
  methods[22].selector = @selector(shortToBigEndianWithShort:);
  methods[23].selector = @selector(shortToBigEndianWithShort:withByteArray:withInt:);
  methods[24].selector = @selector(intToLittleEndianWithInt:);
  methods[25].selector = @selector(intToLittleEndianWithInt:withByteArray:withInt:);
  methods[26].selector = @selector(intToLittleEndianWithIntArray:);
  methods[27].selector = @selector(intToLittleEndianWithIntArray:withByteArray:withInt:);
  methods[28].selector = @selector(littleEndianToLongWithByteArray:withInt:);
  methods[29].selector = @selector(littleEndianToLongWithByteArray:withInt:withLongArray:);
  methods[30].selector = @selector(littleEndianToLongWithByteArray:withInt:withLongArray:withInt:withInt:);
  methods[31].selector = @selector(longToLittleEndianWithLong:);
  methods[32].selector = @selector(longToLittleEndianWithLong:withByteArray:withInt:);
  methods[33].selector = @selector(longToLittleEndianWithLongArray:);
  methods[34].selector = @selector(longToLittleEndianWithLongArray:withByteArray:withInt:);
  methods[35].selector = @selector(longToLittleEndianWithLongArray:withInt:withInt:withByteArray:withInt:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "bigEndianToShort", "[BI", "bigEndianToInt", "[BI[I", "intToBigEndian", "I", "I[BI", "[I", "[I[BI", "bigEndianToLong", "[BI[J", "longToBigEndian", "J", "J[BI", "[J", "[J[BI", "J[BII", "littleEndianToShort", "littleEndianToInt", "[BI[III", "[BII", "shortToLittleEndian", "S", "S[BI", "shortToBigEndian", "intToLittleEndian", "littleEndianToLong", "[BI[JII", "longToLittleEndian", "[JII[BI" };
  static const J2ObjcClassInfo _OrgMinimaUtilsDigestPack = { "Pack", "org.minima.utils.digest", ptrTable, methods, NULL, 7, 0x401, 36, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsDigestPack;
}

@end

void OrgMinimaUtilsDigestPack_init(OrgMinimaUtilsDigestPack *self) {
  NSObject_init(self);
}

jshort OrgMinimaUtilsDigestPack_bigEndianToShortWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint n = JreLShift32((IOSByteArray_Get(nil_chk(bs), off) & (jint) 0xff), 8);
  n |= (IOSByteArray_Get(bs, ++off) & (jint) 0xff);
  return (jshort) n;
}

jint OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint n = JreLShift32(IOSByteArray_Get(nil_chk(bs), off), 24);
  n |= JreLShift32((IOSByteArray_Get(bs, ++off) & (jint) 0xff), 16);
  n |= JreLShift32((IOSByteArray_Get(bs, ++off) & (jint) 0xff), 8);
  n |= (IOSByteArray_Get(bs, ++off) & (jint) 0xff);
  return n;
}

void OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_withIntArray_(IOSByteArray *bs, jint off, IOSIntArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSIntArray *) nil_chk(ns))->size_; ++i) {
    *IOSIntArray_GetRef(ns, i) = OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_(bs, off);
    off += 4;
  }
}

IOSByteArray *OrgMinimaUtilsDigestPack_intToBigEndianWithInt_(jint n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:4];
  OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_(n, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_(jint n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  *IOSByteArray_GetRef(nil_chk(bs), off) = (jbyte) (JreURShift32(n, 24));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 16));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 8));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (n);
}

IOSByteArray *OrgMinimaUtilsDigestPack_intToBigEndianWithIntArray_(IOSIntArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:4 * ((IOSIntArray *) nil_chk(ns))->size_];
  OrgMinimaUtilsDigestPack_intToBigEndianWithIntArray_withByteArray_withInt_(ns, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_intToBigEndianWithIntArray_withByteArray_withInt_(IOSIntArray *ns, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSIntArray *) nil_chk(ns))->size_; ++i) {
    OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_(IOSIntArray_Get(ns, i), bs, off);
    off += 4;
  }
}

jlong OrgMinimaUtilsDigestPack_bigEndianToLongWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint hi = OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_(bs, off);
  jint lo = OrgMinimaUtilsDigestPack_bigEndianToIntWithByteArray_withInt_(bs, off + 4);
  return (JreLShift64((jlong) (hi & (jlong) 0xffffffffLL), 32)) | (jlong) (lo & (jlong) 0xffffffffLL);
}

void OrgMinimaUtilsDigestPack_bigEndianToLongWithByteArray_withInt_withLongArray_(IOSByteArray *bs, jint off, IOSLongArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSLongArray *) nil_chk(ns))->size_; ++i) {
    *IOSLongArray_GetRef(ns, i) = OrgMinimaUtilsDigestPack_bigEndianToLongWithByteArray_withInt_(bs, off);
    off += 8;
  }
}

IOSByteArray *OrgMinimaUtilsDigestPack_longToBigEndianWithLong_(jlong n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:8];
  OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_(n, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_(jlong n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_((jint) (JreURShift64(n, 32)), bs, off);
  OrgMinimaUtilsDigestPack_intToBigEndianWithInt_withByteArray_withInt_((jint) (n & (jlong) 0xffffffffLL), bs, off + 4);
}

IOSByteArray *OrgMinimaUtilsDigestPack_longToBigEndianWithLongArray_(IOSLongArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:8 * ((IOSLongArray *) nil_chk(ns))->size_];
  OrgMinimaUtilsDigestPack_longToBigEndianWithLongArray_withByteArray_withInt_(ns, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_longToBigEndianWithLongArray_withByteArray_withInt_(IOSLongArray *ns, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSLongArray *) nil_chk(ns))->size_; ++i) {
    OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_(IOSLongArray_Get(ns, i), bs, off);
    off += 8;
  }
}

void OrgMinimaUtilsDigestPack_longToBigEndianWithLong_withByteArray_withInt_withInt_(jlong value, IOSByteArray *bs, jint off, jint bytes) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = bytes - 1; i >= 0; i--) {
    *IOSByteArray_GetRef(nil_chk(bs), i + off) = (jbyte) (value & (jint) 0xff);
    JreURShiftAssignLong(&value, 8);
  }
}

jshort OrgMinimaUtilsDigestPack_littleEndianToShortWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint n = IOSByteArray_Get(nil_chk(bs), off) & (jint) 0xff;
  n |= JreLShift32((IOSByteArray_Get(bs, ++off) & (jint) 0xff), 8);
  return (jshort) n;
}

jint OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint n = IOSByteArray_Get(nil_chk(bs), off) & (jint) 0xff;
  n |= JreLShift32((IOSByteArray_Get(bs, ++off) & (jint) 0xff), 8);
  n |= JreLShift32((IOSByteArray_Get(bs, ++off) & (jint) 0xff), 16);
  n |= JreLShift32(IOSByteArray_Get(bs, ++off), 24);
  return n;
}

void OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withIntArray_(IOSByteArray *bs, jint off, IOSIntArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSIntArray *) nil_chk(ns))->size_; ++i) {
    *IOSIntArray_GetRef(ns, i) = OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, off);
    off += 4;
  }
}

void OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withIntArray_withInt_withInt_(IOSByteArray *bs, jint bOff, IOSIntArray *ns, jint nOff, jint count) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < count; ++i) {
    *IOSIntArray_GetRef(nil_chk(ns), nOff + i) = OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, bOff);
    bOff += 4;
  }
}

IOSIntArray *OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_withInt_(IOSByteArray *bs, jint off, jint count) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSIntArray *ns = [IOSIntArray arrayWithLength:count];
  for (jint i = 0; i < ns->size_; ++i) {
    *IOSIntArray_GetRef(ns, i) = OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, off);
    off += 4;
  }
  return ns;
}

IOSByteArray *OrgMinimaUtilsDigestPack_shortToLittleEndianWithShort_(jshort n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:2];
  OrgMinimaUtilsDigestPack_shortToLittleEndianWithShort_withByteArray_withInt_(n, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_shortToLittleEndianWithShort_withByteArray_withInt_(jshort n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  *IOSByteArray_GetRef(nil_chk(bs), off) = (jbyte) (n);
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 8));
}

IOSByteArray *OrgMinimaUtilsDigestPack_shortToBigEndianWithShort_(jshort n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *r = [IOSByteArray arrayWithLength:2];
  OrgMinimaUtilsDigestPack_shortToBigEndianWithShort_withByteArray_withInt_(n, r, 0);
  return r;
}

void OrgMinimaUtilsDigestPack_shortToBigEndianWithShort_withByteArray_withInt_(jshort n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  *IOSByteArray_GetRef(nil_chk(bs), off) = (jbyte) (JreURShift32(n, 8));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (n);
}

IOSByteArray *OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_(jint n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:4];
  OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_(n, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_(jint n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  *IOSByteArray_GetRef(nil_chk(bs), off) = (jbyte) (n);
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 8));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 16));
  *IOSByteArray_GetRef(bs, ++off) = (jbyte) (JreURShift32(n, 24));
}

IOSByteArray *OrgMinimaUtilsDigestPack_intToLittleEndianWithIntArray_(IOSIntArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:4 * ((IOSIntArray *) nil_chk(ns))->size_];
  OrgMinimaUtilsDigestPack_intToLittleEndianWithIntArray_withByteArray_withInt_(ns, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_intToLittleEndianWithIntArray_withByteArray_withInt_(IOSIntArray *ns, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSIntArray *) nil_chk(ns))->size_; ++i) {
    OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_(IOSIntArray_Get(ns, i), bs, off);
    off += 4;
  }
}

jlong OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_(IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  jint lo = OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, off);
  jint hi = OrgMinimaUtilsDigestPack_littleEndianToIntWithByteArray_withInt_(bs, off + 4);
  return (JreLShift64((jlong) (hi & (jlong) 0xffffffffLL), 32)) | (jlong) (lo & (jlong) 0xffffffffLL);
}

void OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_withLongArray_(IOSByteArray *bs, jint off, IOSLongArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSLongArray *) nil_chk(ns))->size_; ++i) {
    *IOSLongArray_GetRef(ns, i) = OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_(bs, off);
    off += 8;
  }
}

void OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_withLongArray_withInt_withInt_(IOSByteArray *bs, jint bsOff, IOSLongArray *ns, jint nsOff, jint nsLen) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < nsLen; ++i) {
    *IOSLongArray_GetRef(nil_chk(ns), nsOff + i) = OrgMinimaUtilsDigestPack_littleEndianToLongWithByteArray_withInt_(bs, bsOff);
    bsOff += 8;
  }
}

IOSByteArray *OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_(jlong n) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:8];
  OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_withByteArray_withInt_(n, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_withByteArray_withInt_(jlong n, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_((jint) (n & (jlong) 0xffffffffLL), bs, off);
  OrgMinimaUtilsDigestPack_intToLittleEndianWithInt_withByteArray_withInt_((jint) (JreURShift64(n, 32)), bs, off + 4);
}

IOSByteArray *OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_(IOSLongArray *ns) {
  OrgMinimaUtilsDigestPack_initialize();
  IOSByteArray *bs = [IOSByteArray arrayWithLength:8 * ((IOSLongArray *) nil_chk(ns))->size_];
  OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_withByteArray_withInt_(ns, bs, 0);
  return bs;
}

void OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_withByteArray_withInt_(IOSLongArray *ns, IOSByteArray *bs, jint off) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < ((IOSLongArray *) nil_chk(ns))->size_; ++i) {
    OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_withByteArray_withInt_(IOSLongArray_Get(ns, i), bs, off);
    off += 8;
  }
}

void OrgMinimaUtilsDigestPack_longToLittleEndianWithLongArray_withInt_withInt_withByteArray_withInt_(IOSLongArray *ns, jint nsOff, jint nsLen, IOSByteArray *bs, jint bsOff) {
  OrgMinimaUtilsDigestPack_initialize();
  for (jint i = 0; i < nsLen; ++i) {
    OrgMinimaUtilsDigestPack_longToLittleEndianWithLong_withByteArray_withInt_(IOSLongArray_Get(nil_chk(ns), nsOff + i), bs, bsOff);
    bsOff += 8;
  }
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsDigestPack)

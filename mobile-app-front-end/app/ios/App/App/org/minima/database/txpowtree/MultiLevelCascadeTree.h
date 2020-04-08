//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/txpowtree/MultiLevelCascadeTree.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree")
#ifdef RESTRICT_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree 1
#endif
#undef RESTRICT_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree

#if !defined (OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree_) && (INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree || defined(INCLUDE_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree))
#define OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree_

@class JavaUtilArrayList;
@class OrgMinimaDatabaseMmrMMRSet;
@class OrgMinimaDatabaseTxpowtreeBlockTree;
@class OrgMinimaObjectsBaseMiniNumber;

@interface OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree : NSObject {
 @public
  OrgMinimaDatabaseTxpowtreeBlockTree *mMainTree_;
  OrgMinimaDatabaseTxpowtreeBlockTree *mCascadeTree_;
  JavaUtilArrayList *mRemovals_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaDatabaseTxpowtreeBlockTree:(OrgMinimaDatabaseTxpowtreeBlockTree *)zMainTree;

- (JavaUtilArrayList *)cascadedTree;

- (OrgMinimaDatabaseTxpowtreeBlockTree *)getCascadeTree;

- (JavaUtilArrayList *)getRemoved;

- (void)recurseParentMMRWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zCascade
                            withOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zNode;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree, mMainTree_, OrgMinimaDatabaseTxpowtreeBlockTree *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree, mCascadeTree_, OrgMinimaDatabaseTxpowtreeBlockTree *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree, mRemovals_, JavaUtilArrayList *)

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree *self, OrgMinimaDatabaseTxpowtreeBlockTree *zMainTree);

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree *new_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeBlockTree *zMainTree) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree *create_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeBlockTree *zMainTree);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeMultiLevelCascadeTree")

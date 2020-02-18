//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/backup/BackupManager.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemBackupBackupManager")
#ifdef RESTRICT_OrgMinimaSystemBackupBackupManager
#define INCLUDE_ALL_OrgMinimaSystemBackupBackupManager 0
#else
#define INCLUDE_ALL_OrgMinimaSystemBackupBackupManager 1
#endif
#undef RESTRICT_OrgMinimaSystemBackupBackupManager

#if !defined (OrgMinimaSystemBackupBackupManager_) && (INCLUDE_ALL_OrgMinimaSystemBackupBackupManager || defined(INCLUDE_OrgMinimaSystemBackupBackupManager))
#define OrgMinimaSystemBackupBackupManager_

#define RESTRICT_OrgMinimaSystemSystemHandler 1
#define INCLUDE_OrgMinimaSystemSystemHandler 1
#include "org/minima/system/SystemHandler.h"

@class JavaIoFile;
@class OrgMinimaObjectsTxPOW;
@class OrgMinimaSystemMain;
@class OrgMinimaUtilsMessagesMessage;

@interface OrgMinimaSystemBackupBackupManager : OrgMinimaSystemSystemHandler {
 @public
  NSString *mConfigurationFolder_;
  JavaIoFile *mRoot_;
  JavaIoFile *mBackup_;
  JavaIoFile *mTxPOWDB_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain
                               withNSString:(NSString *)zConfFolder;

- (void)backupTxpowWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW;

+ (void)deleteFolderWithJavaIoFile:(JavaIoFile *)zFolder;

- (void)deleteTxpowWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW;

- (JavaIoFile *)getBackUpFileWithNSString:(NSString *)name;

- (NSString *)getRootFolder;

- (JavaIoFile *)getTxPOWFolder;

#pragma mark Protected

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemBackupBackupManager)

J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupBackupManager, mConfigurationFolder_, NSString *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupBackupManager, mRoot_, JavaIoFile *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupBackupManager, mBackup_, JavaIoFile *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupBackupManager, mTxPOWDB_, JavaIoFile *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_INIT(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_INIT;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_INIT, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_CLEAR(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_CLEAR;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_CLEAR, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_WRITE(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_WRITE;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_WRITE, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_READ(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_READ;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_READ, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_READSYNC(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_READSYNC;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_READSYNC, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_READUSER(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_READUSER;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_READUSER, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_READTXPOW(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_READTXPOW;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_READTXPOW, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_POSTACTIONMSG(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_POSTACTIONMSG;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_POSTACTIONMSG, NSString *)

inline NSString *OrgMinimaSystemBackupBackupManager_get_BACKUP_POSTACTION_HANDLER(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemBackupBackupManager_BACKUP_POSTACTION_HANDLER;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemBackupBackupManager, BACKUP_POSTACTION_HANDLER, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemBackupBackupManager_initWithOrgMinimaSystemMain_withNSString_(OrgMinimaSystemBackupBackupManager *self, OrgMinimaSystemMain *zMain, NSString *zConfFolder);

FOUNDATION_EXPORT OrgMinimaSystemBackupBackupManager *new_OrgMinimaSystemBackupBackupManager_initWithOrgMinimaSystemMain_withNSString_(OrgMinimaSystemMain *zMain, NSString *zConfFolder) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemBackupBackupManager *create_OrgMinimaSystemBackupBackupManager_initWithOrgMinimaSystemMain_withNSString_(OrgMinimaSystemMain *zMain, NSString *zConfFolder);

FOUNDATION_EXPORT void OrgMinimaSystemBackupBackupManager_deleteFolderWithJavaIoFile_(JavaIoFile *zFolder);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemBackupBackupManager)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemBackupBackupManager")

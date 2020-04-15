
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-base64-to-gallery.base64ToGallery",
          "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
          "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
          "cordova.base64ToGallery"
        ]
        },
      {
          "id": "cordova-plugin-advanced-http.http",
          "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
          "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
          "cordova.plugin.http"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-qrscanner.QRScanner",
          "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
          "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
          "QRScanner"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryEntry",
          "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryReader",
          "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryReader"
        ]
        },
      {
          "id": "cordova-plugin-file.Entry",
          "file": "plugins/cordova-plugin-file/www/Entry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Entry"
        ]
        },
      {
          "id": "cordova-plugin-file.File",
          "file": "plugins/cordova-plugin-file/www/File.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.File"
        ]
        },
      {
          "id": "cordova-plugin-file.FileEntry",
          "file": "plugins/cordova-plugin-file/www/FileEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.FileError",
          "file": "plugins/cordova-plugin-file/www/FileError.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileError"
        ]
        },
      {
          "id": "cordova-plugin-file.FileReader",
          "file": "plugins/cordova-plugin-file/www/FileReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileReader"
        ]
        },
      {
          "id": "cordova-plugin-file.FileSystem",
          "file": "plugins/cordova-plugin-file/www/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileSystem"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadOptions",
          "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadOptions"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadResult",
          "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadResult"
        ]
        },
      {
          "id": "cordova-plugin-file.FileWriter",
          "file": "plugins/cordova-plugin-file/www/FileWriter.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileWriter"
        ]
        },
      {
          "id": "cordova-plugin-file.Flags",
          "file": "plugins/cordova-plugin-file/www/Flags.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Flags"
        ]
        },
      {
          "id": "cordova-plugin-file.LocalFileSystem",
          "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.LocalFileSystem"
        ],
        "merges": [
          "window"
        ]
        },
      {
          "id": "cordova-plugin-file.Metadata",
          "file": "plugins/cordova-plugin-file/www/Metadata.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Metadata"
        ]
        },
      {
          "id": "cordova-plugin-file.ProgressEvent",
          "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.ProgressEvent"
        ]
        },
      {
          "id": "cordova-plugin-file.requestFileSystem",
          "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.requestFileSystem"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-base64-to-gallery.object.assign-polyfill",
          "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
          "pluginId": "cordova-base64-to-gallery"
        },
      {
          "id": "cordova-plugin-advanced-http.cookie-handler",
          "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.dependency-validator",
          "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.error-codes",
          "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.global-configs",
          "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.helpers",
          "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.js-util",
          "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.local-storage-store",
          "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.lodash",
          "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.messages",
          "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.ponyfills",
          "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.public-interface",
          "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.tough-cookie",
          "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.url-util",
          "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-file.fileSystems",
          "file": "plugins/cordova-plugin-file/www/fileSystems.js",
          "pluginId": "cordova-plugin-file"
        },
      {
          "id": "cordova-plugin-file.isChrome",
          "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystems-roots",
          "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystemPaths",
          "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "cordova"
        ],
        "runs": true
        },
      {
          "id": "cordova-plugin-file.androidFileSystem",
          "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "FileSystem"
        ]
        },
      {
          "id": "cordova-plugin-file.resolveLocalFileSystemURI",
          "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "window"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-base64-to-gallery": "4.1.3",
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-advanced-http": "2.4.1",
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-file": "6.0.2",
      "cordova-plugin-qrscanner": "3.0.1",
      "cordova-sqlite-storage": "5.0.0",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-statusbar": "2.4.3",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    
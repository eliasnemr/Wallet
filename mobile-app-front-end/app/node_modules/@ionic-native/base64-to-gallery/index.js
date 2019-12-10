var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Base64ToGalleryOriginal = /** @class */ (function (_super) {
    __extends(Base64ToGalleryOriginal, _super);
    function Base64ToGalleryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64ToGalleryOriginal.prototype.base64ToGallery = function (data, options) { return cordova(this, "base64ToGallery", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Base64ToGalleryOriginal.pluginName = "Base64ToGallery";
    Base64ToGalleryOriginal.plugin = "cordova-base64-to-gallery";
    Base64ToGalleryOriginal.pluginRef = "cordova";
    Base64ToGalleryOriginal.repo = "https://github.com/Nexxa/cordova-base64-to-gallery";
    Base64ToGalleryOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return Base64ToGalleryOriginal;
}(IonicNativePlugin));
var Base64ToGallery = new Base64ToGalleryOriginal();
export { Base64ToGallery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC10by1nYWxsZXJ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDbkMsbUNBQWlCOzs7O0lBV3BELHlDQUFlLGFBQ2IsSUFBWSxFQUNaLE9BQWdDOzs7Ozs7MEJBdkRwQztFQTBDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlNjRUb0dhbGxlcnlPcHRpb25zIHtcbiAgLyoqIFNhdmVkIGZpbGUgbmFtZSBwcmVmaXggKi9cbiAgcHJlZml4OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPbiBBbmRyb2lkIHJ1bnMgTWVkaWEgU2Nhbm5lciBhZnRlciBmaWxlIGNyZWF0aW9uLlxuICAgKiBPbiBpT1MgaWYgdHJ1ZSB0aGUgZmlsZSB3aWxsIGJlIGFkZGVkIHRvIGNhbWVyYSByb2xsLCBvdGhlcndpc2Ugd2lsbCBiZSBzYXZlZCB0byBhIGxpYnJhcnkgZm9sZGVyLlxuICAgKi9cbiAgbWVkaWFTY2FubmVyOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhc2U2NCBUbyBHYWxsZXJ5XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzYXZlIGJhc2U2NCBkYXRhIGFzIGEgcG5nIGltYWdlIGludG8gdGhlIGRldmljZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYXNlNjRUb0dhbGxlcnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jhc2U2NC10by1nYWxsZXJ5L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlNjRUb0dhbGxlcnk6IEJhc2U2NFRvR2FsbGVyeSkgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhc2U2NFRvR2FsbGVyeS5iYXNlNjRUb0dhbGxlcnkoYmFzZTY0RGF0YSwgeyBwcmVmaXg6ICdfaW1nJyB9KS50aGVuKFxuICogICByZXMgPT4gY29uc29sZS5sb2coJ1NhdmVkIGltYWdlIHRvIGdhbGxlcnkgJywgcmVzKSxcbiAqICAgZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBzYXZpbmcgaW1hZ2UgdG8gZ2FsbGVyeSAnLCBlcnIpXG4gKiApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQmFzZTY0VG9HYWxsZXJ5T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2U2NFRvR2FsbGVyeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtYmFzZTY0LXRvLWdhbGxlcnknLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZXh4YS9jb3Jkb3ZhLWJhc2U2NC10by1nYWxsZXJ5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2U2NFRvR2FsbGVyeSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYmFzZTY0IHN0cmluZyB0byBhbiBpbWFnZSBmaWxlIGluIHRoZSBkZXZpY2UgZ2FsbGVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgYWN0dWFsIGJhc2U2NCBzdHJpbmcgdGhhdCB5b3Ugd2FudCB0byBzYXZlXG4gICAqIEBwYXJhbSB7YW55fSBbb3B0aW9uc10gQW4gb2JqZWN0IHdpdGggcHJvcGVydGllc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGltYWdlIGlzIHNhdmVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGJhc2U2NFRvR2FsbGVyeShcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEJhc2U2NFRvR2FsbGVyeU9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
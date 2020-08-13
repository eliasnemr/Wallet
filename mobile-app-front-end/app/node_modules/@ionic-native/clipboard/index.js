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
var ClipboardOriginal = /** @class */ (function (_super) {
    __extends(ClipboardOriginal, _super);
    function ClipboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardOriginal.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    ClipboardOriginal.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    ClipboardOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    ClipboardOriginal.pluginName = "Clipboard";
    ClipboardOriginal.plugin = "cordova-clipboard";
    ClipboardOriginal.pluginRef = "cordova.plugins.clipboard";
    ClipboardOriginal.repo = "https://github.com/ihadeed/cordova-clipboard";
    ClipboardOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return ClipboardOriginal;
}(IonicNativePlugin));
var Clipboard = new ClipboardOriginal();
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7O29CQWhFUDtFQXVDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgQ2xpcGJvYXJkXG4gKiBAZGVzY3JpcHRpb25cbiAqIENsaXBib2FyZCBtYW5hZ2VtZW50IHBsdWdpbiBmb3IgQ29yZG92YSB0aGF0IHN1cHBvcnRzIGlPUywgQW5kcm9pZCwgYW5kIFdpbmRvd3MgUGhvbmUgOC5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NsaXBib2FyZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpcGJvYXJkOiBDbGlwYm9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5jb3B5KCdIZWxsbyB3b3JsZCcpO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLnBhc3RlKCkudGhlbihcbiAqICAgIChyZXNvbHZlOiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KHJlc29sdmUpO1xuICogICAgIH0sXG4gKiAgICAgKHJlamVjdDogc3RyaW5nKSA9PiB7XG4gKiAgICAgICBhbGVydCgnRXJyb3I6ICcgKyByZWplY3QpO1xuICogICAgIH1cbiAqICAgKTtcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5jbGVhcigpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2xpcGJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL2NvcmRvdmEtY2xpcGJvYXJkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaXBib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvcGllcyB0aGUgZ2l2ZW4gdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHRoYXQgZ2V0cyBjb3BpZWQgb24gdGhlIHN5c3RlbSBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY29waWVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGFzdGVzIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gcGFzdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhc3RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY2xlYW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
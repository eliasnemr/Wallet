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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Base64ToGallery = /** @class */ (function (_super) {
    __extends(Base64ToGallery, _super);
    function Base64ToGallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64ToGallery.prototype.base64ToGallery = function (data, options) { return cordova(this, "base64ToGallery", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Base64ToGallery.pluginName = "Base64ToGallery";
    Base64ToGallery.plugin = "cordova-base64-to-gallery";
    Base64ToGallery.pluginRef = "cordova";
    Base64ToGallery.repo = "https://github.com/Nexxa/cordova-base64-to-gallery";
    Base64ToGallery.platforms = ["Android", "iOS", "Windows Phone 8"];
    Base64ToGallery = __decorate([
        Injectable()
    ], Base64ToGallery);
    return Base64ToGallery;
}(IonicNativePlugin));
export { Base64ToGallery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC10by1nYWxsZXJ5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDbkMsbUNBQWlCOzs7O0lBV3BELHlDQUFlLGFBQ2IsSUFBWSxFQUNaLE9BQWdDOzs7Ozs7SUFidkIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQTFDNUI7RUEwQ3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZTY0VG9HYWxsZXJ5T3B0aW9ucyB7XG4gIC8qKiBTYXZlZCBmaWxlIG5hbWUgcHJlZml4ICovXG4gIHByZWZpeDogc3RyaW5nO1xuICAvKipcbiAgICogT24gQW5kcm9pZCBydW5zIE1lZGlhIFNjYW5uZXIgYWZ0ZXIgZmlsZSBjcmVhdGlvbi5cbiAgICogT24gaU9TIGlmIHRydWUgdGhlIGZpbGUgd2lsbCBiZSBhZGRlZCB0byBjYW1lcmEgcm9sbCwgb3RoZXJ3aXNlIHdpbGwgYmUgc2F2ZWQgdG8gYSBsaWJyYXJ5IGZvbGRlci5cbiAgICovXG4gIG1lZGlhU2Nhbm5lcjogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXNlNjQgVG8gR2FsbGVyeVxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc2F2ZSBiYXNlNjQgZGF0YSBhcyBhIHBuZyBpbWFnZSBpbnRvIHRoZSBkZXZpY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFzZTY0VG9HYWxsZXJ5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXNlNjQtdG8tZ2FsbGVyeS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZTY0VG9HYWxsZXJ5OiBCYXNlNjRUb0dhbGxlcnkpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYXNlNjRUb0dhbGxlcnkuYmFzZTY0VG9HYWxsZXJ5KGJhc2U2NERhdGEsIHsgcHJlZml4OiAnX2ltZycgfSkudGhlbihcbiAqICAgcmVzID0+IGNvbnNvbGUubG9nKCdTYXZlZCBpbWFnZSB0byBnYWxsZXJ5ICcsIHJlcyksXG4gKiAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2F2aW5nIGltYWdlIHRvIGdhbGxlcnkgJywgZXJyKVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhc2U2NFRvR2FsbGVyeU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXNlNjRUb0dhbGxlcnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWJhc2U2NC10by1nYWxsZXJ5JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV4eGEvY29yZG92YS1iYXNlNjQtdG8tZ2FsbGVyeScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlNjRUb0dhbGxlcnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIGJhc2U2NCBzdHJpbmcgdG8gYW4gaW1hZ2UgZmlsZSBpbiB0aGUgZGV2aWNlIGdhbGxlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgVGhlIGFjdHVhbCBiYXNlNjQgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge2FueX0gW29wdGlvbnNdIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbWFnZSBpcyBzYXZlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogM1xuICB9KVxuICBiYXNlNjRUb0dhbGxlcnkoXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBCYXNlNjRUb0dhbGxlcnlPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { NgModule, PLATFORM_ID } from '@angular/core';
import { provideStorage, Storage, StorageConfigToken } from './storage';
export { StorageConfigToken, Storage };
var IonicStorageModule = /** @class */ (function () {
    function IonicStorageModule() {
    }
    IonicStorageModule_1 = IonicStorageModule;
    IonicStorageModule.forRoot = function (storageConfig) {
        if (storageConfig === void 0) { storageConfig = null; }
        return {
            ngModule: IonicStorageModule_1,
            providers: [
                { provide: StorageConfigToken, useValue: storageConfig },
                {
                    provide: Storage,
                    useFactory: provideStorage,
                    deps: [StorageConfigToken, PLATFORM_ID]
                }
            ]
        };
    };
    var IonicStorageModule_1;
    IonicStorageModule = IonicStorageModule_1 = __decorate([
        NgModule()
    ], IonicStorageModule);
    return IonicStorageModule;
}());
export { IonicStorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvc3RvcmFnZS8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUVMLGNBQWMsRUFDZCxPQUFPLEVBRVAsa0JBQWtCLEVBQ25CLE1BQU0sV0FBVyxDQUFDO0FBRW5CLE9BQU8sRUFBaUIsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFHdEQ7SUFBQTtJQWNBLENBQUM7MkJBZFksa0JBQWtCO0lBQ3RCLDBCQUFPLEdBQWQsVUFBZSxhQUFtQztRQUFuQyw4QkFBQSxFQUFBLG9CQUFtQztRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtnQkFDeEQ7b0JBQ0UsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFVBQVUsRUFBRSxjQUFjO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUU7aUJBQ3pDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFiVSxrQkFBa0I7UUFEOUIsUUFBUSxFQUFFO09BQ0Usa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVTdG9yYWdlLFxuICBTdG9yYWdlLFxuICBTdG9yYWdlQ29uZmlnLFxuICBTdG9yYWdlQ29uZmlnVG9rZW5cbn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElvbmljU3RvcmFnZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZUNvbmZpZ1Rva2VuLCB1c2VWYWx1ZTogc3RvcmFnZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZSxcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuLCBQTEFURk9STV9JRCBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
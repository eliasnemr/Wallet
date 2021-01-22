var IonicStorageModule_1;
import { __decorate } from "tslib";
import { NgModule, PLATFORM_ID } from '@angular/core';
import { provideStorage, Storage, StorageConfigToken } from './storage';
export { StorageConfigToken, Storage };
let IonicStorageModule = IonicStorageModule_1 = class IonicStorageModule {
    static forRoot(storageConfig = null) {
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
    }
};
IonicStorageModule = IonicStorageModule_1 = __decorate([
    NgModule()
], IonicStorageModule);
export { IonicStorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvc3RvcmFnZS8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFFTCxjQUFjLEVBQ2QsT0FBTyxFQUVQLGtCQUFrQixFQUNuQixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQWlCLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDO0FBR3RELElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUErQixJQUFJO1FBQ2hELE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUN4RDtvQkFDRSxPQUFPLEVBQUUsT0FBTztvQkFDaEIsVUFBVSxFQUFFLGNBQWM7b0JBQzFCLElBQUksRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBRTtpQkFDekM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWRZLGtCQUFrQjtJQUQ5QixRQUFRLEVBQUU7R0FDRSxrQkFBa0IsQ0FjOUI7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVTdG9yYWdlLFxuICBTdG9yYWdlLFxuICBTdG9yYWdlQ29uZmlnLFxuICBTdG9yYWdlQ29uZmlnVG9rZW5cbn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElvbmljU3RvcmFnZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZUNvbmZpZ1Rva2VuLCB1c2VWYWx1ZTogc3RvcmFnZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZSxcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuLCBQTEFURk9STV9JRCBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
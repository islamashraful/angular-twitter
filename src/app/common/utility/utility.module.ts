import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        EllipsisPipe
    ],
    declarations: [
        EllipsisPipe
    ]
})
export class UtilityModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilityModule
        };
    }
}

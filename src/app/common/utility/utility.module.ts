import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { DataService } from './services/data/data.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
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
            ngModule: UtilityModule,
            providers: [
                DataService
            ]
        };
    }
}

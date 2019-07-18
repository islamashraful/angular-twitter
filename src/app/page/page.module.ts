import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from '../common/shared/components/table/table.component';

@NgModule({
    declarations: [LayoutComponent, HomeComponent, TableComponent],
    imports: [
        CommonModule,
        PageRoutingModule
    ]
})
export class PageModule { }

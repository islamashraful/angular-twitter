import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from '../common/shared/components/table/table.component';
import { PaginationComponent } from '../common/shared/components/pagination/pagination.component';

@NgModule({
    declarations: [LayoutComponent, HomeComponent, TableComponent, PaginationComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbPaginationModule
    ]
})
export class PageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageRoutingModule } from './page-routing.module';
import { UtilityModule } from '../common/utility/utility.module';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from '../common/shared/components/table/table.component';
import { PaginationComponent } from '../common/shared/components/pagination/pagination.component';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
    declarations: [LayoutComponent, TableComponent, PaginationComponent, TweetsComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbPaginationModule,
        UtilityModule
    ]
})
export class PageModule { }

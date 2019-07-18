import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from '../common/shared/components/table/table.component';
import { PaginationComponent } from '../common/shared/components/pagination/pagination.component';
import { HashtagSearchComponent } from './layout/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './layout/user-search/user-search.component';

@NgModule({
    declarations: [LayoutComponent, TableComponent, PaginationComponent, HashtagSearchComponent, UserSearchComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbPaginationModule
    ]
})
export class PageModule { }

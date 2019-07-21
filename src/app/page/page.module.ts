import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageRoutingModule } from './page-routing.module';
import { UtilityModule } from '../common/utility/utility.module';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from '../common/shared/components/table/table.component';
import { PaginationComponent } from '../common/shared/components/pagination/pagination.component';
import { HashtagSearchComponent } from './layout/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './layout/user-search/user-search.component';
import { TweetsComponent } from './layout/tweets/tweets.component';

@NgModule({
    declarations: [LayoutComponent, TableComponent, PaginationComponent, HashtagSearchComponent, UserSearchComponent, TweetsComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbPaginationModule,
        UtilityModule
    ]
})
export class PageModule { }

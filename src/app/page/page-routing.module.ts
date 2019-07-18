import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HashtagSearchComponent } from './layout/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './layout/user-search/user-search.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HashtagSearchComponent
            },
            {
                path: 'hashtag-search',
                component: HashtagSearchComponent
            },
            {
                path: 'user-search',
                component: UserSearchComponent
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PageRoutingModule { }

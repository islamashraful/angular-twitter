import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppView } from '../common/utility/enums/view';
import { LayoutComponent } from './layout/layout.component';
import { TweetsComponent } from './layout/tweets/tweets.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: AppView.HASHTAG_SEARCH,
                pathMatch: 'full'
            },
            {
                path: AppView.HASHTAG_SEARCH,
                component: TweetsComponent
            },
            {
                path: AppView.USER_SEARCH,
                component: TweetsComponent
            },
            { path: '**', redirectTo: '/hashtag-search' }
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

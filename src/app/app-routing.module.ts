import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './core/components/main.component';
import {InfoPostComponent} from './core/components/info-post.component';
import {ListPostsComponent} from './core/components/list-posts.component';
import {AddPostComponent} from './core/components/add-post.component';
import {EditPostComponent} from './core/components/edit-post.component';

const routes: Routes = [
  {path: '', component: ListPostsComponent},
  {path: 'post/list', component: ListPostsComponent},
  {path: 'post/add', component: AddPostComponent},
  {path: 'post/edit/:id', component: EditPostComponent},
  {path: 'post/info/:id', component: InfoPostComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

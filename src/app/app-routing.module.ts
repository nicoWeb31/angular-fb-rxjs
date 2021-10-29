import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltPostsComponent } from './pages/alt-posts/alt-posts.component';
import { DeclarativePostsComponent } from './pages/declarative-posts/declarative-posts.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'declarative-posts',
    component: DeclarativePostsComponent,
  },
  {
    path: 'alt-posts',
    component: AltPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

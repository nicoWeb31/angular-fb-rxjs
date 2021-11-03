import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { DeclarativePostsComponent } from './pages/declarative-posts/declarative-posts.component';
import { AltPostsComponent } from './pages/alt-posts/alt-posts.component';
import { PostComponent } from './components/post/post.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostsComponent, HomeComponent, DeclarativePostsComponent, AltPostsComponent, PostComponent, LoadingComponent, AddPostComponent],
  imports: [BrowserModule, AppRoutingModule,CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

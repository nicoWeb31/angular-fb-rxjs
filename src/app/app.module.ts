import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { DeclarativePostsComponent } from './pages/declarative-posts/declarative-posts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostsComponent, HomeComponent, DeclarativePostsComponent],
  imports: [BrowserModule, AppRoutingModule,CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

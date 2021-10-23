import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, DeclarativePostsService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService, DeclarativePostsService],
})
export class CorePostsModule {}

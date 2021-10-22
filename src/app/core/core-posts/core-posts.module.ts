import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService],
})
export class CorePostsModule {}

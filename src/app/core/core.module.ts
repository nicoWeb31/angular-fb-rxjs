import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePostsModule } from './core-posts/core-posts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CorePostsModule],
  exports: [CorePostsModule],
})
export class CoreModule {}

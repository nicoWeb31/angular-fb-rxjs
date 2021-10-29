import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePostsModule } from './core-posts';
import { CoreUserModule } from './core-user';
import { CoreLoaderModule } from './core-loader';

@NgModule({
  declarations: [],
  imports: [CommonModule, CorePostsModule, CoreUserModule, CoreLoaderModule],
  exports: [CorePostsModule, CoreUserModule, CoreLoaderModule],
})
export class CoreModule {}

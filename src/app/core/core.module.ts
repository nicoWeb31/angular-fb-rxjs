import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePostsModule } from './core-posts';
import { CoreUserModule } from './core-user';

@NgModule({
  declarations: [],
  imports: [CommonModule, CorePostsModule, CoreUserModule],
  exports: [CorePostsModule, CoreUserModule],
})
export class CoreModule {}

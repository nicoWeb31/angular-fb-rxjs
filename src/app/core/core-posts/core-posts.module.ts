import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[PostsService]
})
export class CorePostsModule { }

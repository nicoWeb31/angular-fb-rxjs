import { Component, OnInit } from '@angular/core';
import { DeclarativePostsService, Post } from 'src/app/core/core-posts';

@Component({
  selector: 'app-alt-posts',
  templateUrl: './alt-posts.component.html',
  styleUrls: ['./alt-posts.component.scss'],
})
export class AltPostsComponent {
  post$ = this.postService.postsWithUsers$;

  constructor(private postService: DeclarativePostsService) {}

  onSelectPost(post: Post, e : Event) {
    e.preventDefault();
    console.log(post);
  }
}

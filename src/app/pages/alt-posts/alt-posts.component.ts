import { Component, OnInit } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { DeclarativePostsService, Post } from 'src/app/core/core-posts';

@Component({
  selector: 'app-alt-posts',
  templateUrl: './alt-posts.component.html',
  styleUrls: ['./alt-posts.component.scss'],
})
export class AltPostsComponent {
  showAddPost: boolean = false;
  post$ = this.postService.allPost$.pipe(
    tap((posts) => {
      posts[0].id && this.postService.selectedPost(posts[0].id);
    })
  );

  selectPost$ = this.postService.post$.pipe(
    tap((data) => {
      console.log(data);
    })
  );

  viewModel$ = combineLatest([this.post$, this.selectPost$]).pipe(
    map(([posts, selectedPost]) => {
      return { posts, selectedPost };
    })
  );
  constructor(private postService: DeclarativePostsService) {}

  onSelectPost(post: Post, e: Event) {
    this.showAddPost = false;
    e.preventDefault();
    console.log(post);
    this.postService.selectedPost(post.id);
  }

  addPost() {
    this.showAddPost = true;
  }
}

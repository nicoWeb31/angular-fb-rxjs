import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/core-posts';
import { PostsService } from 'src/app/core/core-posts/service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.postService.getPost().subscribe((data) => {
        this.posts = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

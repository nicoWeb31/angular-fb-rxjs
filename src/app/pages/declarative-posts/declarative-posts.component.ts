import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostsService } from 'src/app/core/core-posts';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
})
export class DeclarativePostsComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPostWithUser();
  }
}

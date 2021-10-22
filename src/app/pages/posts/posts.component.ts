import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/core-posts/service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.postService.test()
  }
}

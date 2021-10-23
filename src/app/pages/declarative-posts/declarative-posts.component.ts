import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DeclarativePostsService,
  Post,
  PostsService,
} from 'src/app/core/core-posts';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  posts$ = this.postService.posts$;

  constructor(private postService: DeclarativePostsService) {}

  ngOnInit(): void {}
}

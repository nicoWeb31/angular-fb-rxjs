import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DeclarativePostsService } from 'src/app/core/core-posts';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  userId : number = 4;
  posts$ = this.postService.postsWithUsers$;
  filteredPost$ = this.posts$.pipe(
    map((posts) => {
      return posts.filter((post) => post.userId === this.userId);
    })
  );

  constructor(private postService: DeclarativePostsService) {}

  ngOnInit(): void {}
}

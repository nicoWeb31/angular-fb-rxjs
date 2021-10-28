import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DeclarativePostsService } from 'src/app/core/core-posts';
import { UserService } from 'src/app/core/core-user';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  userId: number | null;
  posts$ = this.postService.postsWithUsers$;
  user$ = this.userService.users$;

  filteredPost$ = this.posts$.pipe(
    map((posts) => {
      return posts.filter((post) =>
        this.userId ? post.userId === this.userId : true
      );
    })
  );

  constructor(
    private postService: DeclarativePostsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  selectUser(event: Event) {
    console.log(event);

    const selectUser = (this.userId = +(event.target as HTMLSelectElement)
      .value);
    this.userId = selectUser;
  }
}

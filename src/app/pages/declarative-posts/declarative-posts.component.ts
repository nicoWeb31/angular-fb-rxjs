import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject, tap } from 'rxjs';
import { CoreLoaderService } from 'src/app/core/core-loader';
import { DeclarativePostsService } from 'src/app/core/core-posts';
import { UserService } from 'src/app/core/core-user';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  userIdSubject = new BehaviorSubject<number | null>(null);
  selectUserAction$ = this.userIdSubject.asObservable();

  userId: number | null;
  posts$ = this.postService.postsWithUsers$;
  user$ = this.userService.users$;

  filteredPost$ = combineLatest([this.posts$, this.selectUserAction$]).pipe(
    tap(() => {
      this.loaderService.hideLoader();
    }),
    map(([posts, userId]) => {
      return posts.filter((post) => (userId ? post.userId === userId : true));
    })
  );

  constructor(
    private postService: DeclarativePostsService,
    private userService: UserService,
    private loaderService: CoreLoaderService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.showLoader();
    }, 100);
  }

  selectUser(event: Event) {
    console.log(event);

    const selectUser = +(event.target as HTMLSelectElement).value;
    this.userIdSubject.next(selectUser);
  }
}

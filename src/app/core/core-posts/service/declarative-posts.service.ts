import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map, shareReplay, throwError
} from 'rxjs';
import { Post } from '..';
import { DeclarativeUserService } from '../../core-user';

@Injectable()
export class DeclarativePostsService {
  posts$ = this.http
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(catchError(this.handleError), shareReplay(1));

  postsWithUsers$ = combineLatest([
    this.posts$,
    this.declarativeUserService.user$,
  ]).pipe(
    map(([posts, users]) => {
      return posts.map((post) => {
        return {
          ...post,
          user: users.find((user) => user.id === post.userId)?.id,
        } as Post;
      });
    }),
    catchError(this.handleError),
    shareReplay(1)
  );

  private selectedPostSubject = new BehaviorSubject<number>(0);
  selectedPostAction$ = this.selectedPostSubject.asObservable();

  selectedPost(postId: number) {
    this.selectedPostSubject.next(postId);
  }
  post$ = combineLatest([this.postsWithUsers$, this.selectedPostAction$]).pipe(
    map(([posts, selectPostId]) => {
      return posts.find((post) => post.id === selectPostId);
    }),
    catchError(this.handleError),
    shareReplay(1)
  );

  constructor(
    private http: HttpClient,
    private declarativeUserService: DeclarativeUserService
  ) {}

  handleError(error: Error) {
    return throwError(() => {
      console.log(error);
      return 'unknown  error occured, please try again';
    });
  }
}

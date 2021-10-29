import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Subject } from 'rxjs';
import { Post } from '..';
import { DeclarativeUserService } from '../../core-user';

@Injectable()
export class DeclarativePostsService {
  posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

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
    })
  );

  private selectedPostSubject = new Subject<number>();
  selectedPostAction$ = this.selectedPostSubject.asObservable();

  selectedPost(postId: number) {
    this.selectedPostSubject.next(postId);
  }
  post$ = combineLatest([this.postsWithUsers$, this.selectedPostAction$]).pipe(
    map(([posts, selectPostId]) => {
      return posts.find((post) => post.id === selectPostId);
    })
  );

  constructor(
    private http: HttpClient,
    private declarativeUserService: DeclarativeUserService
  ) {}
}

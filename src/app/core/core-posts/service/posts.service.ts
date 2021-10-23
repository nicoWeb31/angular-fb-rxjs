import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Post, PostWithUser } from '..';
import { UserService } from '../../core-user';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient, private userService: UserService) {}

  test(): void {
    console.log('test');
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostWithUser(): Observable<PostWithUser[]> {
    return this.getPost().pipe(
      mergeMap((posts) => {
        return this.userService.getUser().pipe(
          map((users) => {
            return posts.map((post) => {
              return {
                ...post,
                user: users.find((user) => user.id === post.userId)?.id,
              };
            });
          })
        );
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs/dist/types';
import { Post } from '..';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  test(): void {
    console.log('test');
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

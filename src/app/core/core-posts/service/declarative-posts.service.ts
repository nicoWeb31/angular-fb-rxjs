import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '..';

@Injectable()
export class DeclarativePostsService {
  posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  constructor(private http: HttpClient) {}
}

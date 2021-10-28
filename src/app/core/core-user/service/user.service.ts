import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs/dist/types';
import { User } from '..';

@Injectable()
export class UserService {

  users$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);

  constructor(private http: HttpClient) {}

  // getUser(): Observable<User[]> {
  //   return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  // }
}

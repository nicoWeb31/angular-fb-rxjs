import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '..';

@Injectable()
export class DeclarativeUserService {
  user$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);

  constructor(private http: HttpClient) {}
}

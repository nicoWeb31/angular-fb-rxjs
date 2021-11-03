import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { User } from '..';

@Injectable()
export class DeclarativeUserService {
  user$ = this.http
    .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
    .pipe(shareReplay(1));

  constructor(private http: HttpClient) {}
}

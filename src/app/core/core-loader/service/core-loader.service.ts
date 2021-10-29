import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CoreLoaderService {
  loadingSubject$ = new Subject<boolean>();
  loadingActionSubject = this.loadingSubject$.asObservable();

  constructor() {}

  showLoader() {
    this.loadingSubject$.next(true);
  }

  hideLoader() {
    this.loadingSubject$.next(false);
  }
}

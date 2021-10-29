import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { DeclarativePostsService, PostsService } from 'src/app/core/core-posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  errMessageSubject = new BehaviorSubject<string>('')
  errMessageAction$ = this.errMessageSubject.asObservable()
  errorMessage = '';
  post$ = this.postService.post$.pipe(
    catchError((e: string) => {
      this.errMessageSubject.next(e)
      return EMPTY;
    })
  );

  constructor(private postService: DeclarativePostsService) {}

  ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeclarativePostsService, PostsService } from 'src/app/core/core-posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  post$ = this.postService.post$;

  constructor(private postService: DeclarativePostsService) {}

  ngOnInit(): void {}
}

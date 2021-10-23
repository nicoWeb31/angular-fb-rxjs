import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/core-posts';
import { PostsService } from 'src/app/core/core-posts/service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    public postService: PostsService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.postService.getPostWithUser().subscribe((data) => {
        this.posts = data;
        this.ref.detectChanges();
      })
    );

    this.subscriptions.add(
      interval(1000).subscribe({
        next: (d) => console.log(d),
        error: (e) => console.log(e),
        complete: () => console.log('complete'),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

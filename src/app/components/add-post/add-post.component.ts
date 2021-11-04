import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeclarativePostsService } from 'src/app/core/core-posts';
import { DeclarativeUserService } from 'src/app/core/core-user';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    userId: new FormControl(''),
  });

  users$ = this.userService.user$;

  constructor(
    private userService: DeclarativeUserService,
    private postService: DeclarativePostsService
  ) {}

  ngOnInit(): void {}

  onAddPost() {
    console.log(this.postForm.getRawValue());
    this.postService.addPost(this.postForm.getRawValue());
  }
}

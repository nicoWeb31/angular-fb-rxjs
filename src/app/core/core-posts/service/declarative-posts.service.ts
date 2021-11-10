import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    catchError,
    combineLatest,
    concatMap,
    map,
    merge,
    of,
    scan,
    shareReplay,
    Subject,
    throwError,
} from 'rxjs';
import { CRUDAction, Post } from '..';
import { DeclarativeUserService } from '../../core-user';

@Injectable()
export class DeclarativePostsService {
    posts$ = this.http
        .get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts'
        )
        .pipe(catchError(this.handleError), shareReplay(1));

    postsWithUsers$ = combineLatest([
        this.posts$,
        this.declarativeUserService.user$,
    ]).pipe(
        map(([posts, users]) => {
            return posts.map((post) => {
                return {
                    ...post,
                    user: users.find(
                        (user) => user.id === post.userId
                    )?.id,
                } as Post;
            });
        }),
        catchError(this.handleError),
        shareReplay(1)
    );

    private postCRUDSubject = new Subject<
        CRUDAction<Post>
    >();
    postCRUDAction$ = this.postCRUDSubject.asObservable();

    addPost(post: Post) {
        this.postCRUDSubject.next({
            action: 'add',
            data: post,
        });
    }

    allPost$ = merge(
        this.postsWithUsers$,
        this.postCRUDAction$.pipe(
            concatMap((postAction) =>
                this.savePost(postAction).pipe(
                    map((post) => ({
                        ...postAction,
                        data: post,
                    }))
                )
            )
        )
    ).pipe(
        scan((posts, value) => {
            return this.modifyPosts(posts, value);
        }, [] as Post[])
    );

    private selectedPostSubject =
        new BehaviorSubject<number>(0);
    selectedPostAction$ =
        this.selectedPostSubject.asObservable();

    selectedPost(postId: number) {
        this.selectedPostSubject.next(postId);
    }
    post$ = combineLatest([
        this.postsWithUsers$,
        this.selectedPostAction$,
    ]).pipe(
        map(([posts, selectPostId]) => {
            return posts.find(
                (post) => post.id === selectPostId
            );
        }),
        catchError(this.handleError),
        shareReplay(1)
    );

    constructor(
        private http: HttpClient,
        private declarativeUserService: DeclarativeUserService
    ) {}

    handleError(error: Error) {
        return throwError(() => {
            console.log(error);
            return 'unknown  error occured, please try again';
        });
    }

    savePost(postAction: CRUDAction<Post>) {
        if (postAction.action === 'add') {
            return this.addPostToServer(postAction.data);
        }
        return of(postAction.data);
    }

    addPostToServer(post: Post) {
        return this.http
            .post<{ id: number }>(
                'https://jsonplaceholder.typicode.com/posts',
                post
            )
            .pipe(
                map((newPost) => {
                    return {
                        ...post,
                        id: newPost.id,
                    };
                })
            );
    }

    modifyPosts(
        posts: Post[],
        value: Post[] | CRUDAction<Post>
    ) {
        if (!(value instanceof Array)) {
            if (value.action === 'add') {
                return [...posts, value.data];
            }
        } else {
            return value;
        }
        return posts
    }
}

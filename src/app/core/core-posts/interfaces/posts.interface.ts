import { User } from '../../core-user';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostWithUser extends Post {
  user: number;
}

export interface Post {
  id?: number | string;

  title: string;
  content: string;
  date: string;
  reactions?: Reaction;
  userId?: string;
}
interface Reaction {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}
export interface PostForm {
  title: string;
  content: string;
  user: string;
}
export interface User {
  id: string;
  name: string;
}

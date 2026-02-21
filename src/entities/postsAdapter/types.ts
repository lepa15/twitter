export interface Post {
  id: number;
  userId: number;
  postMessage: string;
  imgMessage: string | null;
  createdAt: string;
  quantityReposts: string;
  quantityLike: string;
  quantityShare: string;
}

export interface User {
  userId: number;
  userName: string;
  mail: string;
  avatar?: string | null;
}

export interface PostsData {
  usersById: Record<number, User>;
  postsList: Post[];
}

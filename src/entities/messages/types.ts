export interface Message {
  id: number;
  userId: number;
  userName: string;
  postMessage: string;
  imgMessage: string | null;
  createdAt: string;
  mail: string;
  quantityReposts: string;
  quantityLike: string;
  quantityShare: string;
}

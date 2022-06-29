import type { Comment } from "./Comment";

export type Article = {
  // id
  id: number;
  // 名前
  name: string;
  // 内容
  content: string;
  // コメント一覧
  commentList: Array<Comment>;
};

import { useCallback, useState } from "react";
import type { Comment } from "../types/Comment";

export const useCommentList = () => {
  // コメント一覧
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = useCallback(
    (object: any) => {
      const newComments = [...comments];

      // コメントのID採番
      let id = 0;
      let idList: Array<number> = [];
      if (newComments.length === 0) {
        id = 1;
      } else {
        newComments.map((comment: Comment) => idList.push(comment.id));
        id = Math.max(...idList) + 1;
      }

      // コメント生成
      let comment: Comment = {
        id: id,
        name: object.name,
        comment: object.comment,
        articleId: object.articleId,
      };

      newComments.push(comment);
      setComments(newComments);
    },
    [comments]
  );

  return { comments, addComment };
};

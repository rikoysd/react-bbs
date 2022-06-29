import { useCallback, useState } from "react";
import type { Article } from "../types/Article";

export const useArticleList = () => {
  // 記事の配列
  const [articles, setArticles] = useState<Article[]>([]);

  /**
   * 記事を追加.
   */
  const addArticle = useCallback(
    (object: any) => {
      const newArticles = [...articles];

      // 記事のid採番
      let id = 0;
      let idList: Array<number> = [];
      if (newArticles.length === 0) {
        id = 1;
      } else {
        newArticles.map((article: Article) => idList.push(article.id));
        id = Math.max(...idList) + 1;
      }

      // 記事を生成
      let article: Article = {
        id: id,
        name: object.name,
        content: object.content,
        commentList: [],
      };

      newArticles.push(article);
      setArticles(newArticles);
    },
    [articles]
  );

  /**
   * 記事を削除.
   */
  const deleteArticle = useCallback(
    (index: number) => {
      alert("本当にこの記事を削除しますか？");
      const newArticles = [...articles];

      newArticles.splice(index, 1);
      setArticles(newArticles);
    },
    [articles]
  );

  return { articles, addArticle, deleteArticle };
};

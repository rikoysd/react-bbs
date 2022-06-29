import { useCallback } from "react";
import { ChangeEvent, FC, useState } from "react";
import { ArticleList } from "./ArticleList";
import { useArticleList } from "../hooks/useArticleList";

export const App: FC = () => {
  const { articles, addArticle, deleteArticle } = useArticleList();

  // 記事の投稿者名
  const [posterName, setPosterName] = useState<string>("");
  // 記事内容
  const [postContent, setPostContent] = useState<string>("");

  // 投稿者名をstateにセット
  const onChangePosterName = (e: ChangeEvent<HTMLInputElement>) => {
    setPosterName(e.target.value);
  };

  // 投稿内容をstateにセット
  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  /**
   * 記事を投稿.
   */
  const onClickAddArticle = () => {
    let object = {
      name: posterName,
      content: postContent,
    };

    addArticle(object);
    setPosterName("");
    setPostContent("");
  };

  /**
   * 記事を削除
   * @param index - インデックス
   */
  const onClickDelete = useCallback(
    (index: number) => {
      deleteArticle(index);
    },
    [deleteArticle]
  );

  return (
    <div>
      <div>
        投稿者：
        <input type="text" value={posterName} onChange={onChangePosterName} />
      </div>
      <div>
        投稿内容：
        <textarea
          name="area"
          value={postContent}
          onChange={onChangePostContent}
          cols={30}
          rows={10}
        ></textarea>
        <div>
          <button onClick={onClickAddArticle}>記事投稿</button>
        </div>
        <ArticleList
          articles={articles}
          onClickDelete={onClickDelete}
        ></ArticleList>
      </div>
    </div>
  );
};

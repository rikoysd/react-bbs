import { ChangeEvent, FC, useState } from "react";
import type { Article } from "../types/Article";
import { CommentList } from "./CommentList";
import { useCommentList } from "../hooks/useCommentList";
import styled from "styled-components";

type Props = {
  articles: Array<Article>;
  onClickDelete: (index: number) => void;
};

export const ArticleList: FC<Props> = (props) => {
  const { comments, addComment } = useCommentList();
  const { articles, onClickDelete } = props;

  // コメント者名
  const [commentName, setCommentName] = useState<string>("");
  // コメント内容
  const [commentContent, setCommentContent] = useState<string>("");

  // コメント名をstateにセット
  const onChangeCommentName = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentName(e.target.value);
  };

  // コメント内容をstateにセット
  const onChangeCommentContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  /**
   * コメント投稿.
   * @param articleId - 記事ID
   */
  const onClickPostComment = (articleId: number) => {
    let object = {
      name: commentName,
      comment: commentContent,
      articleId: articleId,
    };
    addComment(object);
    setCommentName("");
    setCommentContent("");
  };

  return (
    <SContainer>
      <p>記事一覧</p>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <SArticle>
              <div>投稿者名：{article.name}</div>
              <div>投稿内容：{article.content}</div>
              <div>
                <button onClick={() => onClickDelete(index)}>記事削除</button>
              </div>
            </SArticle>
            <CommentList comments={comments}></CommentList>
            <SComment>
              <div>
                名前：
                <input
                  type="text"
                  value={commentName}
                  onChange={onChangeCommentName}
                />
              </div>
              <div>
                コメント：
                <textarea
                  value={commentContent}
                  onChange={onChangeCommentContent}
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
              <div>
                <button onClick={() => onClickPostComment(article.id)}>
                  コメント投稿
                </button>
              </div>
            </SComment>
          </div>
        ))}
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #ccc;
  margin: 8px;
  padding: 16px;
`;

const SArticle = styled.div`
  background-color: aliceblue;
  padding: 10px;
  margin: 25px 10px;
`;

const SComment = styled.div`
  padding: 10px;
  margin: 25px 10px;
`;

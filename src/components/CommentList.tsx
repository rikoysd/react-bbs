import { FC } from "react";
import type { Comment } from "../types/Comment";
import styled from "styled-components";

type Props = {
  comments: Array<Comment>;
};

export const CommentList: FC<Props> = (props) => {
  const { comments } = props;

  return (
    <SContainer>
      <div>みんなのコメント</div>
      <div>
        {comments.map((comment, index) => (
          <SComment key={index}>
            <div>コメント者名：{comment.name}</div>
            <div>コメント内容：{comment.comment}</div>
          </SComment>
        ))}
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 10px;
  margin: 25px 10px;
`;

const SComment = styled.div`
  margin: 15px 0;
  background-color: #ffe9d8;
  padding: 10px;
`;

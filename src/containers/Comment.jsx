import styled from "styled-components";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import commentActions from "../store/actions/commentsActions";
import CommentPart from "./Comment/CommentPart";

const Comment = ({ data, id, length, test }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [commentReply, setCommentReply] = useState(false);

  useEffect(() => {}, [comment]);
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      post: id,
      text: comment,
    };

    dispatch(commentActions(data));
    setComment("");
  };

  const commentValueChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const replyHandler = (id) => {
    return setCommentReply((prev) => !prev);
  };
  return (
    <Container id={id}>
      {data?.map((parent, index) => {
        return (
          <CommentDiv key={parent.id}>
            <CommentUser>
              <h4 className="name">{parent?.user?.name}</h4>
              <h4 className="name">{parent?.user?.last_name}</h4>
            </CommentUser>
            <p className="text">{parent?.text}</p>
            <CommentPartContainer>
              <span>12.12.2022</span>{" "}
              <span
                className="answer"
                id={parent?.id}
                onClick={() => replyHandler(id)}
              >
                Ответить
              </span>
              {commentReply && <CommentPart id={id} parent={parent?.id} />}
              {length === index + 1 && (
                <CommentPart id={id} parent={test} data={parent} />
              )}
            </CommentPartContainer>
            <div className="childComment">
              <div>
                {parent?.child?.length >= 1 && (
                  <Comment
                    data={parent?.child}
                    test={parent?.id}
                    id={id}
                    length={Object.keys(parent?.child).length}
                  />
                )}
              </div>
            </div>
          </CommentDiv>
        );
      })}
      <form onSubmit={submitHandler}>
        {length ? (
          ""
        ) : (
          <div className="footer">
            {" "}
            <Input
              width="348px"
              height="38px"
              placeholder="Напишите комментарий"
              onChange={commentValueChangeHandler}
              value={comment}
            />
            <Button type="submit" variant="comment">
              Ответить
            </Button>
          </div>
        )}
      </form>
    </Container>
  );
};
export default Comment;

const Container = styled("div")`
  margin: 24px 0;
  .text {
    margin-bottom: 7px;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #858080;
  }
  .childComment {
    padding-left: 60px;
  }
  .footer {
    display: flex;
    gap: 25px;
  }
  form {
    display: flex;
    justify-content: space-between;
    width: 521px;
  }
`;

const CommentPartContainer = styled("div")`
  margin-bottom: 24px;
  .answer {
    border-bottom: 1px solid blue;
    cursor: pointer;
    color: blue;
    margin-left: 30px;
  }
`;
const CommentDiv = styled("div")`
  width: 845px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #858080;
  margin-bottom: 24px;
`;
const CommentUser = styled("div")`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 7px;
  gap: 10px;
  .name {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;

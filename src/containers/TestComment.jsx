import styled from "styled-components";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import commentActions, { commentReply } from "../store/actions/commentsActions";

const TestComment = ({ data, id }) => {

  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [commentRepl, setCommentReply] = useState(false);

  const replyId = data?.map((el) => el?.id);
  useEffect(() => { }, [comment]);
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      post: id,
      text: comment,
    };

    dispatch(commentActions(data));
    const replyData = {
      post: id,
      text: comment,
      parent: "23",
    };
    dispatch(commentReply(replyData));

    setComment("");
  };

  const commentValueChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const replyHandler = (userId) => { };
  return (
    <div style={{ margin: "24px 0" }}>
      {data?.map((parent) => {
        return (
          <CommentDiv key={parent.id}>
            <CommentUser>
              <h4>{parent?.user?.name}/</h4>
              <h4>{parent?.user?.last_name}</h4>
            </CommentUser>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                marginBottom: "7px",
              }}
            >
              {parent?.text}
            </p>
            <div style={{ paddingLeft: "60px" }}>
              {parent?.child?.length >= 1 && (
                <TestComment data={parent?.child} id={id} />
              )}
            </div>

            <div style={{ marginBottom: "24px" }}>
              <span>12.12.2022</span>{" "}
              <span
                id={parent?.id}
                onClick={(id) => replyHandler(id)}
                style={{
                  borderBottom: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                  marginLeft: "30px",
                }}
              >
                Ответить
              </span>
              <div>{commentRepl && <input />}</div>
            </div>
          </CommentDiv>
        );
      })}
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "521px",
        }}
      >
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
      </form>
    </div>
  );
};
export default TestComment;

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
`;


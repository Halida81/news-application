import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import styled from "styled-components";
import commentActions from "../store/actions/commentsActions.jsx";

function CommentPart(props) {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.news);

  const commentData = useSelector((state) => state.comment.comment);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      post: props.id,
      text: comment,
    };
    dispatch(commentActions(data));
    setComment("");
  };

  const commentValueChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <div style={{ marginBottom: "104px" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "24px",
            margin: "10px 0",
          }}
        >
          Комментарий
        </p>
        {post?.comment.map((el) => {
          return (
            <CommentDiv key={el.id}>
              <CommentUser>
                <h4 style={{}}>{el?.user?.name}</h4>
                <h4>{el?.user?.last_name}</h4>
              </CommentUser>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  marginBottom: "7px",
                }}
              >
                {el?.text}
              </p>

              <div style={{ marginBottom: "24px" }}>
                <span>12.12.2022</span>{" "}
                <span
                  style={{
                    borderBottom: "1px solid blue",
                    color: "blue",
                    marginLeft: "30px",
                  }}
                >
                  Ответить
                </span>
              </div>

              {el?.child
                ? el.child.map((el) => {
                  return (
                    <div
                      style={{
                        margin: "20px 0 20px 50px",
                      }}
                      key={el.id}
                    >
                      <CommentUser>
                        <h4>{el?.user?.name}</h4>
                        <h4>{el?.user?.last_name}</h4>
                      </CommentUser>
                      <p>{el?.text}</p>
                      <div
                        style={{
                          width: "200px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>12.12.2022</p>
                      </div>
                    </div>
                  );
                })
                : ""}
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
    </div>
  );
}

export default CommentPart;

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
const Img = styled("img")`
  width: 845px;
  height: 555px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  width: 128px;
  height: 38px;
  background-color: red;
`;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { commentReply } from "../../store/actions/commentsActions";

export default function CommentPart({ id, parent }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const valueChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      post: id,
      text,
      parent,
    };
    dispatch(commentReply(data));
    setText("");
  };
  return (
    <form onSubmit={submitHandler}>
      <Container style={{}}>
        <User>Вы</User>{" "}
        <Input
          width="274px"
          height="27px"
          onChange={valueChangeHandler}
          value={text}
        />
        <Button width="128px" height="27px" type="submit">
          Ответить
        </Button>
      </Container>
    </form>
  );
}

const Container = styled.div`
  padding: 10px 0 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;
const User = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

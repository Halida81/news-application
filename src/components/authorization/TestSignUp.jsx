import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";

function TestSignUp() {
  return (
    <div>
      <Form>
        <div className="title">
          <P>Фамилия</P>
          <P>Имя</P>
          <P>Никнейм</P>
          <P>Пароль</P>
          <P>Подтверждение пароля</P>
        </div>
        <ContainerInput className="inputs">
          <section>
            <Input
              className="input"
              type="password"
              name="passwordTwo"
              autoComplete="true"
            />
            <p>error</p>
          </section>
          <section>
            <Input
              className="input"
              type="password"
              name="passwordTwo"
              autoComplete="true"
            />
            <p>error</p>
          </section>{" "}
          <section>
            <Input
              className="input"
              type="password"
              name="passwordTwo"
              autoComplete="true"
            />
            <p>error</p>
          </section>{" "}
          <section>
            <Input
              className="input"
              type="password"
              name="passwordTwo"
              autoComplete="true"
            />
            <p>error</p>
          </section>{" "}
          <section>
            <Input
              className="input"
              type="password"
              name="passwordTwo"
              autoComplete="true"
            />
            <p>error</p>
          </section>
        </ContainerInput>
      </Form>
    </div>
  );
}

export default TestSignUp;

const Form = styled.form`
  width: 527px;
  height: 496px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.14);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
`;

const P = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-top: 30px;
`;

const ContainerInput = styled("div")`
  .input {
    /* margin-top: 15px; */
    height: 39px;
    border: none;
  }
  .input:nth-child(4n + 4) {
    /* background-color: red; */
    ::after {
      content: "лимит на символы";
      position: absolute;
      margin-top: 50px;
      font-size: 12px;
    }
  }
  section {
    height: 60;
    background: gray;
    padding: 0 0 0 0;
    p {
      font-size: 12px;
      margin: 0;
      /* background: green; */
    }
  }
`;

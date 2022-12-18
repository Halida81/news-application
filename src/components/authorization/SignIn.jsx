import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import Button from "../ui/Button";
import { useInput } from "../../hooks/useInput";

function SignIn() {
  const {
    value: nickName,
    isValid: nickNameIsValid,
    hasError: nickNameInputHasError,
    valueChangeHandler: nickNameChangeHanlder,
    inputBlurHandler: nickNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHanlder,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 6);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!passwordIsValid && !nickNameIsValid) {
      return;
    }
    if (nickName.trim() !== "" && password.trim() !== "") {
      const userData = {
        nickName,
        password,
      };
      console.log(userData);
    }
  };

  const dataHandler = () => {
    const userData = {
      nickName,
      password,
    };
    console.log(userData);
  };

  return (
    <Container>
      <StyledForm onSubmit={submitHandler}>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <InputDiv>
          <InputTitle>Никнейм</InputTitle>
          <StyledDiv>
            <Input
              type="text"
              name="nickName"
              error={nickNameInputHasError}
              value={nickName}
              onChange={nickNameChangeHanlder}
              onBlur={nickNameBlurHandler}
            />
            {nickNameInputHasError && (
              <ErrorNickName>введите никнейм</ErrorNickName>
            )}
          </StyledDiv>
        </InputDiv>
        <InputDiv>
          <InputTitle>Пароль</InputTitle>
          <InputPassword
            type="password"
            name="password"
            width="231px"
            value={password}
            onChange={passwordChangeHanlder}
            onBlur={passwordBlurHandler}
            error={passwordInputHasError}
          />
        </InputDiv>
        <StyledDiv>
          {passwordInputHasError && (
            <StyledErrorValidation>
              пароль должен содержать не менее 6 символов
            </StyledErrorValidation>
          )}
        </StyledDiv>
        <ButtonDiv>
          <Button onClick={dataHandler}>Войти</Button>
        </ButtonDiv>
      </StyledForm>
    </Container>
  );
}

export default SignIn;

const Container = styled("div")`
  box-sizing: border-box;
  margin: 0 auto;
  width: 527px;
  height: 286px;
  background: #f6f4fa;
`;
const StyledForm = styled("form")`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 286px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;
const Logo = styled(LogoIcon)`
  width: 129px;
  height: 29px;
  color: #7e5bc2;
`;
const StyledLogo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const InputDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;
const InputTitle = styled("span")`
  width: 72px;
  height: 18px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-top: 8px;
`;
const ButtonDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 43px;
`;
const StyledErrorValidation = styled("p")`
  margin: 0;
  padding:0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 20px;
  margin-top: -20px;
`;
const ErrorNickName = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 132px;
`;
const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

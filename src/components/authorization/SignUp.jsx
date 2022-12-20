import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import Button from "../ui/Button";
import { useInput } from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../store/actions/SignUpActions";
import SignIn from "./SignIn";

function SignUp() {
  const [error, setError] = useState("");
  // const [login, setLogin] = useState(false);
  const { token } = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: firstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHanlder,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHanlder,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
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
  } = useInput((value) => value.length >= 8);
  const {
    value: passwordTwo,
    isValid: passwordtwoIsValid,
    hasError: passwordTwoInputHasError,
    valueChangeHandler: passwordTwoChangeHanlder,
    inputBlurHandler: passwordTwoBlurHandler,
  } = useInput((value) => value === password && value.length >= 8);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !passwordIsValid &&
      !passwordtwoIsValid &&
      !nickNameIsValid
    ) {
      return;
    }
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      nickName.trim() !== "" &&
      password.trim() !== "" &&
      passwordTwo.trim() !== "" &&
      password === passwordTwo
    ) {
      const userData = {
        name: firstName,
        last_name: lastName,
        nickname: nickName,
        password,
        password2: passwordTwo,
      };
      dispatch(signUp({ userData, setError }));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, []);

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <>
      <Container>
        <StyledForm onSubmit={submitHandler}>
          <StyledLogo>
            <Logo />
          </StyledLogo>
          <InputDiv>
            <InputTitle>Фамилия</InputTitle>
            <StyledDiv>
              <Input
                error={firstNameInputHasError}
                value={firstName}
                onChange={firstNameChangeHanlder}
                onBlur={firstNameBlurHandler}
                type="text"
                name="lastName"
              />
              {lastNameInputHasError && <ErrorName>введите имя</ErrorName>}
            </StyledDiv>
          </InputDiv>
          <InputDiv>
            <InputTitle>Имя</InputTitle>
            <StyledDiv>
              <Input
                error={lastNameInputHasError}
                value={lastName}
                onChange={lastNameChangeHanlder}
                onBlur={lastNameBlurHandler}
                type="text"
                name="firstName"
              />
              {firstNameInputHasError && (
                <ErrorLastName>введите фамилию</ErrorLastName>
              )}
            </StyledDiv>
          </InputDiv>
          <InputDiv>
            <InputTitle>Никнейм</InputTitle>
            <StyledDiv>
              <Input
                error={nickNameInputHasError}
                value={nickName}
                onChange={nickNameChangeHanlder}
                onBlur={nickNameBlurHandler}
                type="text"
                name="nickName"
              />
              {nickNameInputHasError && (
                <ErrorNickName>введите никнейм</ErrorNickName>
              )}
            </StyledDiv>
          </InputDiv>
          <InputDiv>
            <InputTitle>Пароль</InputTitle>
            <InputPassword
              value={password}
              onChange={passwordChangeHanlder}
              onBlur={passwordBlurHandler}
              error={passwordInputHasError}
              type="password"
              name="password"
              width="231px"
            />
          </InputDiv>
          <StyledDiv>
            <LimitTitle>Лимит на символы</LimitTitle>
            {passwordInputHasError && (
              <StyledErrorValidation>
                пароль должен содержать не менее 8 символов
              </StyledErrorValidation>
            )}
          </StyledDiv>

          <StyledLastDiv>
            <StyledInputTitle>Подтверждение пароля</StyledInputTitle>
            <StyledDiv>
              <StyledInput
                value={passwordTwo}
                onChange={passwordTwoChangeHanlder}
                onBlur={passwordTwoBlurHandler}
                error={passwordTwoInputHasError}
                type="password"
                name="passwordTwo"
              />
              {passwordTwoInputHasError && (
                <ErrorWithMargin>
                  пароль должен совпадать с предыдущим
                </ErrorWithMargin>
              )}
            </StyledDiv>
          </StyledLastDiv>
          <ButtonDiv>
            {error ? <ErrorTitle>{error}</ErrorTitle> : ""}
            <Button type="submit">Регистрация</Button>
          </ButtonDiv>
          <SignUpDiv>
            <SpanTitle>Уже есть логин?</SpanTitle>
            <SingUpTitle onClick={loginHandler}>Войти</SingUpTitle>
          </SignUpDiv>
        </StyledForm>
      </Container>
      {/* ) : (
        <SignIn />
      ) */}
      {/* } */}
    </>
  );
}

export default SignUp;

const Container = styled("div")`
  box-sizing: border-box;
  margin: 0 auto;
  width: 1510px;
  height: 1110px;
  background: #f6f4fa;
`;
const StyledForm = styled("form")`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 496px;
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
const StyledInput = styled(InputPassword)`
  margin-right: 19px;
  margin-top: 10px;
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
const StyledInputTitle = styled("span")`
  width: 72px;
  height: 18px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-top: 8px;
  margin-left: 18px;
`;
const ButtonDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
`;
const SpanTitle = styled("span")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #5a5a5a;
`;
const SingUpTitle = styled("span")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: blue;
  border-bottom: 1px solid blue;
  cursor: pointer;
`;
const SignUpDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const StyledErrorValidation = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 20px;
`;
const ErrorName = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 158px;
`;
const ErrorLastName = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 128px;
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
const ErrorWithMargin = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Ubuntu";
  font-size: 12px;
  color: #b40e0e;
  text-align: end;
  margin-right: 11px;
`;
const LimitTitle = styled("label")`
  margin-left: 44px;
  text-align: center;
  margin-top: -20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #5a5a5a;
  z-index: 99;
`;
const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;
const StyledLastDiv = styled("div")`
  display: flex;
  justify-content: space-around;
`;

const ErrorTitle = styled("p")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: red;
`;

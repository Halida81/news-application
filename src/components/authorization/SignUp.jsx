import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import Button from "../ui/Button";
import { useInput } from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import signUpActions from "../../store/actions/SignUpActions";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isError = useSelector((state) => state.authSlice.user);
  const postError = isError?.non_field_errors;

  
  const isNickname = isError?.nickname
  const error = postError?.map((el) => el);
  const {
    value: firstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    hasError2: firstNameError,
    valueChangeHandler: firstNameChangeHanlder,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    hasError2: lastNameError,
    valueChangeHandler: lastNameChangeHanlder,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: nickName,
    isValid: nickNameIsValid,
    hasError: nickNameInputHasError,
    hasError2: nickNameError,
    valueChangeHandler: nickNameChangeHanlder,
    inputBlurHandler: nickNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    hasError2: passwordError,
    valueChangeHandler: passwordChangeHanlder,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 8);
  const {
    value: passwordTwo,
    isValid: passwordtwoIsValid,
    hasError: passwordTwoInputHasError,
    hasError2: passwordTwoError,
    valueChangeHandler: passwordTwoChangeHanlder,
    inputBlurHandler: passwordTwoBlurHandler,
  } = useInput((value) => value === password && value.length >= 8);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      firstNameError &&
      lastNameError &&
      nickNameError &&
      passwordError &&
      passwordTwoError
    ) {
      return;
    }
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
      dispatch(signUpActions(userData));

      firstName("");
    }
  };

  const loginHandler = () => {
    navigate("/auth/login");
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
                required
                error={firstNameInputHasError}
                value={firstName}
                onChange={firstNameChangeHanlder}
                onBlur={firstNameBlurHandler}
                type="text"
                name="lastName"
              />
              {firstNameInputHasError && <ErrorName>введите имя</ErrorName>}
            </StyledDiv>
          </InputDiv>
          <InputDiv>
            <InputTitle>Имя</InputTitle>
            <StyledDiv>
              <Input
                required
                error={lastNameInputHasError}
                value={lastName}
                onChange={lastNameChangeHanlder}
                onBlur={lastNameBlurHandler}
                type="text"
                name="firstName"
              />
              {lastNameInputHasError && (
                <ErrorLastName>введите фамилию</ErrorLastName>
              )}
            </StyledDiv>
          </InputDiv>
          <InputDiv>
            <InputTitle>Никнейм</InputTitle>
            <StyledDiv>
              <Input
                required
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
              className="password"
              required
              value={password}
              onChange={passwordChangeHanlder}
              onBlur={passwordBlurHandler}
              error={passwordInputHasError}
              type="password"
              name="password"
              width="231px"
              autoComplete="true"
            />
          </InputDiv>
          <StyledDiv>
            {passwordInputHasError && (
              <StyledErrorValidation>
                пароль должен содержать не менее 8 символов
              </StyledErrorValidation>
            )}
          </StyledDiv>

          <InputDiv>
            <InputTitle>Подтверждение пароля</InputTitle>
            <StyledDiv>
              <InputPassword
                required
                value={passwordTwo}
                onChange={passwordTwoChangeHanlder}
                onBlur={passwordTwoBlurHandler}
                error={passwordTwoInputHasError}
                type="password"
                name="passwordTwo"
                autoComplete="true"
              />
              {passwordTwoInputHasError && (
                <ErrorWithMargin>
                  пароль должен совпадать с предыдущим
                </ErrorWithMargin>
              )}
            </StyledDiv>
          </InputDiv>
          <ButtonDiv>
            {<ErrorTitle>{error}</ErrorTitle>} {<ErrorTitle>{isNickname}</ErrorTitle>}
            <Button type="submit">Регистрация</Button>
          </ButtonDiv>
          <SignUpDiv>
            <SpanTitle>Уже есть логин?</SpanTitle>
            <SingUpTitle onClick={loginHandler}>Войти</SingUpTitle>
          </SignUpDiv>
        </StyledForm>
      </Container>
    </>
  );
}

export default SignUp;

const Container = styled("div")`
  box-sizing: border-box;
  margin: 0 auto;
  width: 1510px;
  height: 100%;
`;
const StyledForm = styled("form")`
  box-sizing: border-box;
  position: absolute;
  height: ${(hasErrors) => (hasErrors === 'true' ? '70%' : '60%')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
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
  justify-content: space-between;
  margin: 20px 10px 10px 10px;
  .password:nth-child(1) {
    ::after {
      content: "лимит на символы";
      position: absolute;
      margin-top: 50px;
      font-size: 12px;
    }
  }
`;
const InputTitle = styled("span")`
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
  text-align: center;
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

const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ErrorTitle = styled("span")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: red;
  margin-bottom: 10px;
`;

import { useState } from "react";

export const useInput = (validateState) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueisValid = validateState(enteredValue);
  const hasError = !valueisValid && isTouched;
  const hasError2 = !valueisValid && !isTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  return {
    value: enteredValue,
    isValid: valueisValid,
    hasError,
    hasError2,
    valueChangeHandler,
    inputBlurHandler,
  };
};

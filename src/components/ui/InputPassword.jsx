import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as ClosedEyes } from "../../assets/icons/closedEyes.svg";
import { ReactComponent as OpenedEyes } from "../../assets/icons/openedEyes.svg";


const InputPassword = forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    value,
    error,
    onBlur,
    onChange,
    width,
    height,
    id,
    type,
    ...other
  } = props;
  const [textOrPassword, setValues] = React.useState(false);

  const handleClickShowPassword = () => {
    setValues((prev) => !prev);
  };
  const handleDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <OutlinedInputStyled
      type={textOrPassword ? "text" : "password"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      error={error}
      id={id}
      onBlur={onBlur}
      name={name}
      {...other}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleDownPassword}
            edge="end"
          >
            {textOrPassword ? <OpenedEyes /> : <ClosedEyes />}
          </IconButton>
        </InputAdornment>
      }
    />
    </div>
  );
});

export default InputPassword;

const OutlinedInputStyled = styled(OutlinedInput)((props) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: "231px",
  height: "39px",
}));

import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import { IconButton, InputAdornment } from "@mui/material";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";

const Input = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    name,
    id,
    error,
    defaultValue,
    onBlur,
    onChange,
    value,
    width,
    height,
    edit,
    download,
    text,
    ...other
  } = props;

  return (
    <>
      <StyledTextField
        autoComplete="off"
        error={error}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        width={width}
        height={height}
        {...other}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              {edit ? <EditIcon /> : ""}
              {download ? <DownloadIcon /> : ""}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
});

export default Input;

const StyledTextField = styled(OutlinedInput)((props) => ({
  boxSizing: "border-box",
  fontSize: "16px",
  fontStyle: "normal",
  display: "flex",
  borderRadius: "10px",
  border: "1px solid #D9D9D9",
  alignItems: "center",
  width: props.width || "231px",
  height: props.height || "39px",
  fontFamily: "Ubuntu",
  fontWeight: "400",
}));

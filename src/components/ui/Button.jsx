// import React from "react";

// import styled from "styled-components";
// import MuiButton from "@mui/material/Button";

// const Button = ({ children, type, onClick, active, disabled, ...other }) => {
//   return (
//     <StyledButton
//       onClick={onClick}
//       active={active}
//       type={type}
//       disabled={disabled}
//       {...other}
//     >
//       {children}
//     </StyledButton>
//   );
// };

// export default Button;

// const StyledButton = styled(MuiButton)((props) => ({
//   cursor: "pointer",
//   boxSizing: "border-box",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontFamily: "Ubuntu",
//   fontStyle: "normal",
//   fontSize: "14px",
//   textTransform: "none",
//   borderRadius: "10px",
//   background: "#7E5BC2",
// //   padding: "6px 49px",
//   color: "white",
//   height: props.height || "30px",
//   width: props.width || "168px",
//     ":disabled": { background: "#b7a8d6", color: "white" },
//     ":active": props.active,
//     ":focus": {
//       background: "#7E5BC2",
//     },
//   "&:hover": {
//     backgroundColor: "#7E5BC2",
//   },
// }));

import React from "react";

import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";

const BUTTON_VARIANTS = {
  large: {
    backgroundColor: "#7E5BC2",
    height: "30px",
    width: "191px",
    "&:hover": {
      backgroundColor: "#7E5BC2",
    },
  },
  medium: {
    backgroundColor: "#7E5BC2",
    height: "30px",
    width: "168px",
    "&:hover": {
      backgroundColor: "#7E5BC2",
    },
  },
  small: {
    width: "128px",
    height: "27px",
    backgroundColor: "#7E5BC2",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#7E5BC2",
    },
  },
};

const Button = ({
  children,
  variant,
  type,
  onClick,
  startIcon,
  active,
  disabled,
  ...other
}) => {
  return (
    <StyledButton
      styles={BUTTON_VARIANTS[variant]}
      onClick={onClick}
      active={active}
      type={type}
      disabled={disabled}
      {...other}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "large",
};

export default Button;

const StyledButton = styled(MuiButton)`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 10px;
  text-transform: none;
  &:active {
    ${(props) => props.active}
  }
  &:disabled {
    background: #9f8dc5;
    color: white;
  }
  ${({ styles }) => ({ ...styles })}
`;

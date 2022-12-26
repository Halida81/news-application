import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

// import balls from '../../../../assets/images/Vector (4).png'

export default function MeatBalls({ navigations, icon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img  src={icon} alt="balls" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {navigations?.map((el) => (
          <MenuItem
            key={el.id}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
              el.clickItem(el.id);
            }}
          >
            {el.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
const Container = styled("div")`
  width: 176px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

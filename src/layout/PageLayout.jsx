import React from "react";
import styled from "styled-components";
import bgImage from "../assets/images/image.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import profile from "../assets/icons/profile.svg";
import menu from "../assets/icons/menu.svg";
import MeatBalls from "../components/ui/MeatBalls";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PageLayout({ children }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const profileNavigations = [
    {
      id: "1",
      title: "Мой профиль",
    },
    {
      id: "2",
      title: "Выйти",
    },
  ];

  const menuNavigations = [
    {
      id: "1",
      title: "Избранные новости",
    },
  ];

  const openSearchInputHandler = () => {
    setOpen(true);
  };

  const profileHandler = () => {
    navigate("/profile");
  };
  const selectedNewsHandler = () => {
    navigate("/selectedNews");
  };
  return (
    <div>
      <StyledDiv>
        <StyledHeader>
          <div>
            <StyledLogoIcon />
          </div>
          <StyledIconsDiv>
            <div onClick={openSearchInputHandler}>
              {open ? <Input /> : <SearchIcon />}
            </div>
            <div>
              <MeatBalls navigations={profileNavigations} icon={profile} />
            </div>
            <div>
              <MeatBalls navigations={menuNavigations} icon={menu} />
            </div>
          </StyledIconsDiv>
        </StyledHeader>
      </StyledDiv>
      {children}
      <div>
        <StyledFooterDiv>
          <Footer>
            <FooterLogo>
              <StyledLogoIcon />
            </FooterLogo>
            <Div>
              <span onClick={profileHandler}>Мой профиль</span>
              <span onClick={selectedNewsHandler}>Избранные новости</span>
            </Div>
          </Footer>
        </StyledFooterDiv>
      </div>
    </div>
  );
}

export default PageLayout;

const StyledFooterDiv = styled("div")`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #151515;
`;

const Footer = styled("footer")`
  margin: 0 auto;
  width: 1440px;
  height: 192px;
`;
const StyledDiv = styled("div")`
  width: 100%;
  background-image: url(${bgImage});
  background-size: auto;
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledHeader = styled("header")`
  margin: 0 auto;
  width: 1440px;
  height: 240px;
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
`;
const StyledLogoIcon = styled(LogoIcon)`
  color: white;
`;
const StyledIconsDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;
const FooterLogo = styled("div")`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
const Div = styled("div")`
  display: flex;
  justify-content: center;
  color: white;
  span {
    padding: 10px;
    cursor: pointer;
  }
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/purpleSearch.svg";
import profile from "../assets/icons/purpleProfile.svg";
import menu from "../assets/icons/purpleMenu.svg";
import MeatBalls from "../components/ui/MeatBalls";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import selectedNewsActions from "../store/actions/LikeActions";
import { useNavigate } from "react-router-dom";

function UserPageLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(selectedNewsActions());
  }, []);

  const profileHandler = () => {
    navigate("/profile");
  };
  const selectedNewsHandler = () => {
    navigate("/selectedNews");
  };

  const openSearchInputHandler = () => {
    setOpen(true);
  };

  return (
    <div>
      <StyledDiv>
        <StyledHeader>
          <div>
            <HeaderLogoIcon />
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

export default UserPageLayout;

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
  background-size: auto;
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledHeader = styled("header")`
  margin: 0 auto;
  width: 1440px;
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
`;
const StyledLogoIcon = styled(LogoIcon)`
  color: white;
`;
const HeaderLogoIcon = styled(LogoIcon)`
  color: #7e5bc2;
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

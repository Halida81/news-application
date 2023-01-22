import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/purpleSearch.svg";
import profile from "../assets/icons/purpleProfile.svg";
import menu from "../assets/icons/purpleMenu.svg";
import MeatBalls from "../components/ui/MeatBalls";
import { useDispatch, useSelector } from "react-redux";
import selectedNewsActions from "../store/actions/LikeActions";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/ui/SearchInput";
import searchAction from "../store/actions/searchAction";

function UserPageLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const options = useSelector((state) => state.search.searchResult);
  const loading = useSelector((state) => state.search.searchResult);

  const profileNavigations = [
    {
      id: "1",
      title: "Мой профиль",
      clickItem: () => {
        navigate("/megalab/profile");
      },
    },
    {
      id: "2",
      title: "Выйти",
      clickItem: () => {
        logOutHandler();
      },
    },
  ];

  const menuNavigations = [
    {
      id: "1",
      title: "Избранные новостиa",
      clickItem: () => {
        navigate("/megalab/selectedNews");
      },
    },
  ];

  const logOutHandler = () => {
    localStorage.clear();
    document.location.reload();

  };

  useEffect(() => {
    dispatch(selectedNewsActions());
  }, []);

  const profileHandler = () => {
    navigate("/megalab/profile");
  };
  const selectedNewsHandler = () => {
    navigate("/megalab/selectedNews");
  };

  const openSearchInputHandler = () => {
    setOpen(true);
  };

  const valueChangeHandler = (event) => {
    const targetValue = event.target.value;
    setValue(targetValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchAction(value));
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  const searchResultOptionSelecHandler = (id) => {
    navigate(`/megalab/news/${id}`);
    setValue("");
  };

  const stopPropagationHandler = (event) => {
    event.stopPropagation();
  };

  const toGoNewsPageHandler = () => {
    navigate("/megalab/news");
  };

  return (
    <div>
      <StyledDiv>
        <StyledHeader>
          <div classname="logo" onClick={toGoNewsPageHandler}>
            <HeaderLogoIcon />
          </div>
          <StyledIconsDiv>
            <div onClick={openSearchInputHandler}>
              {open ? (
                <SearchInput
                  options={options}
                  onChange={valueChangeHandler}
                  value={value}
                  onClick={searchResultOptionSelecHandler}
                  stopPropagationHandler={stopPropagationHandler}
                />
              ) : (
                <SearchIcon />
              )}
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
      <Main>
        <Container>{children}</Container>
      </Main>
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
  );
}

export default UserPageLayout;

const StyledFooterDiv = styled("div")`
  width: 100%;
  background: #151515;
`;

const Footer = styled("footer")`
  margin: 0 auto;
  width: 1100px;
  height: 192px;
`;
const StyledDiv = styled("div")`
  width: 100%;
`;
const StyledHeader = styled("header")`
  margin: 0 auto;
  width: 1100px;
  padding-top: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-between;
`;
const StyledLogoIcon = styled(LogoIcon)`
  color: white;
  cursor: pointer;
`;
const HeaderLogoIcon = styled(LogoIcon)`
  color: #7e5bc2;
  cursor: pointer;
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

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 35px auto 120px auto;
  width: 1100px;
`;

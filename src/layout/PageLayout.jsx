import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgImage from "../assets/images/image.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import profile from "../assets/icons/profile.svg";
import menu from "../assets/icons/menu.svg";
import MeatBalls from "../components/ui/MeatBalls";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/ui/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import searchAction from "../store/actions/searchAction";

function PageLayout({ children }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const options = useSelector((state) => state.search.searchResult);

  const profileNavigations = [
    {
      id: "1",
      title: "Мой профиль",
      clickItem: () => {
        navigate("/app/profile");
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
      title: "Избранные новости",
      clickItem: () => {
        navigate("/app/selectedNews");
      },
    },
  ];

  const logOutHandler = () => {
    localStorage.clear();
    navigate("/auth/registration");
    // document.location.reload();
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
    navigate(`/app/news/${id}`);
    setValue("");
  };

  const stopPropagationHandler = (event) => {
    event.stopPropagation();
  };

  const openSearchInputHandler = () => {
    setOpen(true);
  };

  const profileHandler = () => {
    navigate("/app/profile");
  };
  const selectedNewsHandler = () => {
    navigate("/app/selectedNews");
  };

  const toGoNewsPageHandler = () => {
    navigate('/app/news')
  }
  return (
    <div>
      <div>
        <StyledHeader>
          <Header>
            <div onClick={toGoNewsPageHandler}>
              <StyledLogoIcon />
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
          </Header>
        </StyledHeader>
      </div>
      <Main>
        <Container>{children}</Container>
      </Main>
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
  margin-top: 104px;
`;

const Footer = styled("footer")`
  margin: 0 auto;
  width: 1100px;
  height: 192px;
`;
const StyledHeader = styled("div")`
  width: 100%;
  height: 240px;
  background-image: url(${bgImage});
  &::after {
    content: "Новости ";
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 83px;
    color: white;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
  }
  background-size: auto;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Header = styled("header")`
  margin: 0 auto 46px auto;
  width: 1100px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
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
  color: white;
  display: flex;
  justify-content: center;
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

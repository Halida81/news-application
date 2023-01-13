import { InputBase, Paper, styled } from "@mui/material";

export default function SearchInput({
  options,
  onChange,
  value,
  onClick,
  stopPropagationHandler,
}) {
  const renderSearchResults = () => {
    if (options?.length > 0) {
      return options?.map((user) => {
        return (
          <StyledUserDiv
            key={user.id}
            onClick={(event) => {
              onClick(user.id);
              stopPropagationHandler(event);
            }}
          >
            <StyledOwner>
              {" "}
              Автор:<span>{user.author}</span>
            </StyledOwner>
            <StyledSpan>{user.title}</StyledSpan>
          </StyledUserDiv>
        );
      });
    }
    return <p>Не найдено</p>;
  };

  return (
    <>
      <StyledFormPaper>
        <MuiInputBase
          placeholder="Поиск новостей..."
          value={value}
          onChange={onChange}
        />
      </StyledFormPaper>
      {value.trim().length >= 1 && (
        <ResultDiv>
          <StyledTitle>Результаты поиска</StyledTitle>
          <StyledContentTitle>{renderSearchResults()}</StyledContentTitle>
        </ResultDiv>
      )}
    </>
  );
}

const ResultDiv = styled("div")`
  background-color: #fafafa;
  border-radius: 8px;
  position: absolute;
  height: auto;
  top: 69px;
  width: 40%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 99;
`;

const StyledFormPaper = styled(Paper)`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2px;
  gap: 18px;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  &:hover {
    border: 2px solid #8639b5;
  }
  &:focus-within {
    border: 2px solid #8639b5;
  }
`;

const MuiInputBase = styled(InputBase)`
  width: 100%;
  height: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #8d949e;
  flex: auto;
`;

const StyledTitle = styled("p")`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  height: 22px;
  letter-spacing: 0.2px;
  color: #020202;
  margin-left: 18px;
`;

const StyledSpan = styled("span")`
  cursor: pointer;
  color: black;
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const StyledUserDiv = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 16px;
`;

const StyledContentTitle = styled("span")`
  height: 19px;
  width: 300px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #020202;
`;

const StyledOwner = styled("p")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px 0;
  width: 200px;
  display: flex;
  justify-content: flex-start;
  span {
    margin-left: 7px;
  }
`;

import React, { useState } from "react";
import styled from "@emotion/styled";
import BasicModal from "../components/ui/BasicModal";
import Button from "../components/ui/Button";
import ImagePicker from "../components/ui/ImagePicker";
import Input from "../components/ui/Input";
import Selected from "../components/ui/Select";

const AddNewsModal = (props) => {
  const { open, onClose } = props;
  const [photo, setPhoto] = useState(null);
  const [headerName, setHeaderName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [news, setNews] = useState("");

  const onChangeImageValue = (file) => {
    if (file.size <= 1000000) {
      setPhoto(file);
    }
  };
  const headerNameHandler = (e) => {
    setHeaderName(e.target.value);
  };

  const shortDescriptionHandler = (e) => {
    setShortDescription(e.target.value);
  };

  const newsHandler = (e) => {
    setNews(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      photo,
      headerName,
      shortDescription,
      news,
    };
    console.log(data);
    setPhoto(null);
    setHeaderName("");
    setNews("");
    setShortDescription("");
  };

  const title = [
    {
      name: "Спорт",
      id: "1",
    },
    {
      name: "Звезды",
      id: "2",
    },
    {
      name: "Искусство",
      id: "3",
    },
    {
      name: "Мода",
      id: "4",
    },
    {
      name: "Политика",
      id: "5",
    },
  ];

  const handler = () => {
    console.log("a");
  };
  return (
    <BasicModal open={open} onClose={onClose}>
      <Container onSubmit={submitHandler}>
        <AddTitle>Добавить новости</AddTitle>
        <ModalChildDiv>
          <StyledTitle>Обложка новости</StyledTitle>
          <ImagePicker onChange={onChangeImageValue} id="addImagePicker" />
        </ModalChildDiv>
        <ModalChildDiv>
          <StyledTitle>Заголовок</StyledTitle>
          <Input
            type="text"
            width="263px"
            height="35px"
            value={headerName}
            onChange={headerNameHandler}
          />
        </ModalChildDiv>
        <ModalChildDiv>
          <StyledTitle>Краткое описание</StyledTitle>
          <Input
            type="text"
            width="263px"
            height="35px"
            value={shortDescription}
            onChange={shortDescriptionHandler}
          />
        </ModalChildDiv>
        <ModalChildDiv>
          <StyledTitle>Текст новости</StyledTitle>
          <StyledTextarea value={news} onChange={newsHandler} />
        </ModalChildDiv>
        <ModalChildDiv>
          <StyledTitle>Выбрать категорию </StyledTitle>
          <Selected onChange={handler} title={title} />
        </ModalChildDiv>
        <StyledInput value="#не выбрано" width="150px" height="38px" />
        <StyledButton>
          <Button type="submit">Создать</Button>
        </StyledButton>
      </Container>
    </BasicModal>
  );
};

export default AddNewsModal;

const StyledInput = styled(Input)`
  width: 150px;
  height: 38px;
  top: 20px;
`;
const ModalChildDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const StyledTextarea = styled("textarea")`
  width: 263px;
  height: 95px;
  border: 1px solid #dedce4;
  border-radius: 5px;
`;
const StyledButton = styled("div")`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
`;
const AddTitle = styled("p")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0px;
  margin-bottom: 24px;
  color: #23262f;
  text-align: center;
`;
const Container = styled("form")`
  width: 537px;
  height: 541px;
  background: #ffffff;
  border-radius: 15px;
`;
const StyledTitle = styled("label")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
`;

import React, { useEffect, useRef, useState } from "react";

import {ReactComponent as DownloadIcon} from "../../assets/icons/download.svg";

import {ReactComponent as DeleteIcon} from "../../assets/icons/trash.svg";



import styled, { css } from "styled-components";

import previewIMG from "../../assets/images/ImageBG.png";

const ImageUpload = ({ onChange, newPreview }) => {
  const [preview, setPreview] = useState();
  const imgRef = useRef();

  const imgUrl = `https://megalab.pythonanywhere.com${newPreview}`;

  useEffect(() => {
    if (newPreview) {
      setPreview(imgUrl);
    }
  }, [newPreview]);

  const handleDelete = () => {
    imgRef.current.value = "";
    setPreview("");
    onChange(null);
  };

  const handleImage = () => {
    const image = URL.createObjectURL(imgRef.current.files[0]);
    setPreview(image);
    onChange(imgRef.current.files[0]);
  };
  return (
    <ImageContainer>
      <ImgBG preview={preview} />
      <ActionConatiner>
        <Label htmlFor="file" preview={preview}>
          Добавить фото <DownloadIcon/>
        </Label>
        <UploadInput
          id="file"
          ref={imgRef}
          onChange={handleImage}
          type="file"
          accept="image/jpeg,image/png,image/gif"
        />
        <DeleteButton onClick={handleDelete} type="button">Удалить <DeleteIcon/></DeleteButton>
      </ActionConatiner>
    </ImageContainer>
  );
};

export default ImageUpload;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const UploadInput = styled.input`
  display: none;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  svg {
    fill: red;
    margin-left: 4px;
  }
`;

const ActionConatiner = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-left: 4px;
  }
`;

const ImgBG = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background: url(${previewIMG}) 50% 50% no-repeat;
  border-radius: 50%;
  ${(props) =>
    props.preview &&
    css`
      background: url(${props.preview}) 50% 50% no-repeat;
      background-size: cover;
      background-position: unset;
    `}
`;

import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DownloadIcon from "../../assets/icons/download.svg";


const ImagePicker = ({ onChange, newFile, id, borderNone, ...otherProps }) => {
  const refs = useRef();
  const [icons, setIcons] = useState();
  useEffect(() => {
    if (newFile) {
      setIcons(newFile);
    }
  }, [newFile]);
  const deleteImageHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    refs.current.value = "";
    setIcons("");
  };
  const imageHandler = () => {
    const imageFile = refs.current;
    const image = URL.createObjectURL(refs.current.files[0]);
    if (refs.current.files[0].size < 1000000) {
      setIcons(image);
      onChange(refs.current.files[0]);
    }
  };

  return (
    <ImagePickerContainer icons={icons}>
      <Label icons={icons} htmlFor={id} />
      <Input
        type="file"
        id={id}
        {...otherProps}
        ref={refs}
        onChange={imageHandler}
        value=""
        accept="image/jpeg,image/png,image/gif"
      />
      <DeleteButton onClick={deleteImageHandler}>Удалить</DeleteButton>
    </ImagePickerContainer>
  );
};
export default ImagePicker;

const DeleteButton = styled.button`
  border: none;
  position: absolute;
  top: 87%;
  left: 50%;
  bottom: 30px;
  font-family: "Ubuntu";
  font-weight: 400;
  font-size: 12px;
  color: black;
  z-index: 10;
  display: none;
  cursor: pointer;
  display: none;
  &:hover {
    opacity: 3;
    border-radius: 2px;
    font-family: "Ubuntu";
    align-items: center;
  }
`;
const ImagePickerContainer = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  display: flex;
  align-items: center;
  width: 150px;
  height: 36px;
  background: ${(borderNone) => (borderNone  ? '' : '#f6f6f9')};
  border: ${(borderNone) => borderNone ? "" : "#dcdce4"};
  border-radius: 10px;
  ${(props) =>
    props.icons &&
    css`
      background-image: url(${props.icons});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &: after {
        display: none;
      }
      &:hover {
        align-items: flex-start;
      }
      &:hover > label {
        display: block;
      }
      &:hover > button {
        display: block;
      }
    `}
`;

const Input = styled.input`
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
  }
`;
const Label = styled.label`
  background-image: url(${DownloadIcon});
  margin-left: 112px;
  display: block;
  margin-top: 36px;
  width: 200px;
  height: 40px;
  text-align: center;
  color: #8e8ea9;
  cursor: pointer;
  background-repeat: no-repeat;
  &::after {
    content: "Добавить фото";
    position: absolute;
    margin-right: -15px;
    top: 50%;
    right: 4%;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    width: 200px;
    color: black;
  }
  ${(props) =>
    props.icons &&
    css`
      background-image: none;
      display: none;
      &::after {
        content: "Заменить";
        position: absolute;
        right: 20px;
        top: 88%;
        align-items: center;
        font-family: "Ubuntu";
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        font-size: 12px;
      }
      &:hover:after {
        font-size: 12px;
        text-decoration: underline;
        text-decoration: none;
        display: block;
        align-items: center;
        text-align: center;
        border-radius: 2px;
      }
    `}
`;

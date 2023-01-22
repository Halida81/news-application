import React, { useState } from "react";
import { useDispatch } from "react-redux";
import profileChange from "../store/actions/profileChangeActions";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import styled from "styled-components";
import ImagePicker from "../components/ui/ImagePickerForProfile";

function UserProfile({user}) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [nameChange, setNameChange] = useState("");
  const [lastNameChange, setLastNameChange] = useState("");
  const [nickNameChange, setNickNameChange] = useState("");
  const [imageChange, setImageChange] = useState("");

  const onChangeImageValue = (file) => {
      setImageChange(file);
  };

  const onChangeNameValue = (e) => {
    setNameChange(e.target.value);
  };

  const onChangeLastNameValue = (e) => {
    setLastNameChange(e.target.value);
  };

  const onChangeNickNameValue = (e) => {
    setNickNameChange(e.target.value);
  };
  const submitHandler = (e) => {
    if (!nameChange && !lastNameChange && !nickNameChange && !imageChange) {
      return setError(false);
    }

    e.preventDefault();
    const data = {
      name: nameChange,
      last_name: lastNameChange,
      nickname: nickNameChange,
      profile_image: imageChange,
    };

    dispatch(profileChange(data));
  };

  return (
    <div>
      <StyledForm onSubmit={submitHandler}>
        <div className="user">
            <ImagePicker
              onChange={onChangeImageValue}
              newPreview={user.profile_image}
            />
        </div>
        <div className="data">
          <div>
            <label className="label">Фамилия</label>
            <label className="label">Никнейм</label>
            <label className="label">Имя</label>
          </div>
          <div className="inputs">
            <Input
              // required
              edit="edit"
              onChange={onChangeLastNameValue}
              defaultValue={user.last_name}
              type="text"
              name="last_name"
            />
            <Input
              // required
              edit="edit"
              defaultValue={user.name}
              type="text"
              name="name"
              onChange={onChangeNameValue}
            />
            <Input
              // required
              onChange={onChangeNickNameValue}
              edit="edit"
              defaultValue={user.nickname}
              type="text"
              name="nickname"
            />
            {error && <p>Все поля </p>}
            <Button type="submit" variant="comment">
              Сохранить
            </Button>
          </div>
        </div>
      </StyledForm>
    </div>
  );
}

export default UserProfile;

const StyledForm = styled("form")`
  display: flex;
  justify-content: flex-start;
  Button {
    margin-left: 100px;
  }
  .photoAddOrDelete {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    margin-right: 30px;
  }
  .delete {
    margin-right: 30px;
    margin-top: 14px;
  }
  .data {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;
    /* margin: 15px 0 0 40px; */

    .label {
      display: flex;
      margin: 0 0 35px 0;
    }
    .inputs {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 18px;
    }
  }
`;

const UserContainer = styled('div')`
  
`
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileChange from "../store/actions/profileChangeActions";
import profileActions from "../store/actions/profileActions";
import { ReactComponent as UserProfileIcon } from "../assets/icons/cat.svg";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import styled from "styled-components";
import deleteIcon from "../assets/icons/trash.svg";
import ImagePicker from "../components/ui/ImagePicker";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  const { nickname } = user;
  const { name } = user;
  const { last_name } = user;
  const { profile_image } = user;

  const [nameChange, setNameChange] = useState('');
  const [lastNameChange, setLastNameChange] = useState('');
  const [nickNameChange, setNickNameChange] = useState('');
  const [imageChange, setImageChange] = useState('');
 

  useEffect(() => {
    dispatch(profileActions());
  }, [name]);

  const onChangeImageValue = (file) => {
    if (file.size <= 1000000) {
      setImageChange(file);
    }
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
      <StyledForm
        onSubmit={submitHandler}>
        <div className="user">
          <UserDiv>
            {profile_image ? (
              <Img
                src={`https://megalab.pythonanywhere.com/${profile_image}`}
                alt="img"
              />
            ) : (
              <UserProfileIcon />
            )}
          </UserDiv>

          <span
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <ImagePicker onChange={onChangeImageValue} id="addPhoto" />
            <span style={{ marginRight: "30px", marginTop: "5px" }}>
              Удалить <img src={deleteIcon} alt="Delete" />
            </span>
          </span>
        </div>
        <div className="data">
          <label className="label">Фамилия</label>
          <Input
            edit="edit"
            onChange={onChangeLastNameValue}
            value={lastNameChange}
            defaultValue={last_name}
            type="text"
            name="last_name"
          />
          <label className="label">Имя</label>
          <Input
            edit="edit"
            value={nameChange}
            defaultValue={name}
            type="text"
            name="name"
            onChange={onChangeNameValue}
          />
          <label className="label">Никнейм</label>
          <Input
            onChange={onChangeNickNameValue}
            edit="edit"
            value={nickNameChange}
            defaultValue={nickname}
            type="text"
            name="nickname"
          />
          <Button
            type="submit"
            style={{ marginTop: "30px", marginLeft: "100px" }}
            variant="comment"
          >
            Сохранить
          </Button>
        </div>
      </StyledForm>
    </div>
  );
}

export default UserProfile;

const StyledForm = styled('form')`
   display: flex;
  justify-content: flex-start;
  
  .label{
    background-color: green;
    display: block;
  }
  .data{
    background-color: lime;
    
  }

`
const Img = styled("img")`
  height: 199px;
  width: 199px;
  border-radius: 50%;
`;
const UserDiv = styled("div")`
  width: 199px;
  height: 199px;
`;

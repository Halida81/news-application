import React, { useEffect } from "react";
import deleteIcon from "../assets/icons/trash.svg";
import downIcon from "../assets/icons/download.svg";
import { ReactComponent as Ellipse } from "../assets/icons/Ellipse.svg";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import profileActions from "../store/actions/profileActions";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";
import AddNewsModal from "../containers/AddNewsModal";
import getMyPosts from "../store/actions/getMyPosts.Actions";
import UserPageLayout from "../layout/UserPageLayout";
import styled from "styled-components";
import profileChange from "../store/actions/profileChangeActions";
import ImagePicker from "../components/ui/ImagePicker";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();
  const { addNews } = Object.fromEntries([...params]);

  const [modal, setModal] = useState(false);

  const { myPosts } = useSelector((state) => state.myPosts);
  const user = useSelector((state) => state.profile.profile);

  const { nickname } = user;
  const { name } = user;
  const { last_name } = user;
  const { profile_image } = user;

  const [nameChange, setNameChange] = useState(name);
  const [lastNameChange, setLastNameChange] = useState(last_name);
  const [nickNameChange, setNickNameChange] = useState(nickname);
  const [imageChange, setImageChange] = useState(profile_image);

  let posts = myPosts.filter(function (elem) {
    return elem.author === nickname;
  });

  useEffect(() => {
    dispatch(getMyPosts({ nickname }));
  }, [nickname]);

  useEffect(() => {
    dispatch(profileActions());
  }, [imageChange]);

  const openModalHandler = () => {
    setParams({ addNews: true });
  };
  const closeModalHandler = () => {
    setParams({});
  };
  const goToInnerPage = (id) => {
    navigate(`/news/${id}`);
  };

  const onChangeImageValue = (file) => {
    console.log(file);
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
    <UserPageLayout>
      <div>
        <form onSubmit={submitHandler}>
          <div className="surotko">
            {profile_image ? (
              <Img
                src={`https://megalab.pythonanywhere.com/${profile_image}`}
                alt="img"
              />
            ) : (
              <Ellipse />
            )}

            <div>
              <ImagePicker onChange={onChangeImageValue} id="addPhoto" />
              <p>
                Удалить <img src={deleteIcon} alt="Delete" />
              </p>
            </div>
          </div>
          <label>Фамилия</label>
          <Input
            edit="edit"
            onChange={onChangeLastNameValue}
            value={lastNameChange}
            type="text"
            name="last_name"
          />
          <label>Имя</label>
          <Input
            edit="edit"
            value={nameChange}
            type="text"
            name="name"
            onChange={onChangeNameValue}
          />
          <label>Никнейм</label>
          <Input
            onChange={onChangeNickNameValue}
            edit="edit"
            value={nickname}
            type="text"
            name="nickname"
          />
          <Button type="submit">Сохранить</Button>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <h2>Мои публикации</h2>{" "}
        <Button onClick={openModalHandler}>Новая публикация</Button>
        {addNews ? (
          <AddNewsModal
            open={addNews === "true"}
            onClose={closeModalHandler}
            name="add"
            onOpen={openModalHandler}
          />
        ) : (
          ""
        )}
      </div>

      {posts.map((news) => {
        return (
          <NewsCard
            key={news.id}
            id={news.id}
            tag={news.tag}
            text={news.text}
            title={news.title}
            image={news.image}
            isLike={news.is_liked}
            alt={news?.author}
            wichIs="trash"
            onClick={() => {
              goToInnerPage(news.id);
            }}
          />
        );
      })}
    </UserPageLayout>
  );
}

export default Profile;

const Img = styled("img")`
  height: 199px;
  width: 199px;
  border-radius: 50%;
`;

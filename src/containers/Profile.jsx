import React, { useEffect } from "react";
import deleteIcon from "../assets/icons/trash.svg";
import downIcon from "../assets/icons/download.svg";
import { ReactComponent as Ellipse } from "../assets/icons/Ellipse.svg";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import profileActions from "../store/actions/profileActions";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import AddNewsModal from "../containers/AddNewsModal";
import getMyPosts from "../store/actions/getMyPosts.Actions";
import UserPageLayout from "../layout/UserPageLayout";


function Profile() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const { myPosts } = useSelector((state) => state.myPosts);
  const user = useSelector((state) => state.profile.profile);

  const { nickname } = user;
  const { name } = user;
  const { last_name } = user;

  let posts = myPosts.filter(function (elem) {
    return elem.author === nickname;
  });

  useEffect(() => {
    dispatch(getMyPosts({ nickname }));
  }, []);

  useEffect(() => {
    dispatch(profileActions());
  }, []);

  const openModalHandler = () => {
    setModal((prev) => !prev);
  };

  const goToInnerPage = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <UserPageLayout>
      <div style={{ display: "flex" }}>
        <div className="surotko">
          <Ellipse />

          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>
              Загрузить <img src={downIcon} alt="Down" />
            </p>
            <p>
              Удалить <img src={deleteIcon} alt="Delete" />
            </p>
          </div>
        </div>
        <div className="inputka">
          <form style={{}}>
            <label>Фамилия</label>
            <Input edit="edit" value={last_name} />
            <label>Имя</label>
            <Input edit="edit" value={name} />
            <label>Никнейм</label>
            <Input edit="edit" value={nickname} />
            <Button>Сохранить</Button>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <h2>Мои публикации</h2>{" "}
        <Button onClick={openModalHandler}>Новая публикация</Button>
        {modal ? <AddNewsModal open={modal} onClose={openModalHandler} /> : ""}
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

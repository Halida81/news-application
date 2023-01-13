import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";
import AddNewsModal from "./AddNewsModal";
import getMyPosts from "../store/actions/getMyPosts.Actions";
import Loading from "../components/ui/Loading";
import UserProfile from "./UserProfile";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();
  const { addNews } = Object.fromEntries([...params]);

  const { myPosts } = useSelector((state) => state.myPosts);
  const { loading } = useSelector((state) => state.myPosts);

  const user = useSelector((state) => state.profile.profile);
  const { nickname } = user;

  let posts = myPosts.filter(function (elem) {
    return elem.author === nickname;
  });

  useEffect(() => {
    dispatch(getMyPosts({ nickname }));
  }, [nickname]);

  const openModalHandler = () => {
    setParams({ addNews: true });
  };
  const closeModalHandler = () => {
    setParams({});
  };
  const goToInnerPage = (id) => {
    // /app/news/1641
    navigate(`/app/news/${id}`);
  };

  return (
      <div style={{ height: "100%" }}>
        <UserProfile />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "78px 0 48px 0",
            gap: "420px",
          }}
        >
          {" "}
          <h2 style={{ paddingRight: "30px" }}>Мои публикации</h2>{" "}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "103px",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            posts?.map((news) => {
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
            })
          )}
        </div>
      </div>
  );
}

export default Profile;

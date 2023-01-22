import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";
import AddNewsModal from "./AddNewsModal";
import Loading from "../components/ui/Loading";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import profileActions from "../store/actions/profileActions";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();
  const { addNews } = Object.fromEntries([...params]);

  const { myPosts } = useSelector((state) => state.myPosts);
  const { loading } = useSelector((state) => state.myPosts);

  const user = useSelector((state) => state.profile?.profile);
  console.log(user);

  let posts = myPosts.filter(function (elem) {
    return elem.author === user?.nickname;
  });

  // useEffect(() => {
  //   dispatch(getMyPosts({ nickname }));
  // }, [user?.nickname]);

  useEffect(() => {
    dispatch(profileActions());
  }, []);

  const openModalHandler = () => {
    setParams({ addNews: true });
  };
  const closeModalHandler = () => {
    setParams({});
  };
  const goToInnerPage = (id) => {
    navigate(`/megalab/news/${id}`);
  };

  return (
    <Container>
      {user ? <UserProfile user={user}  /> : <Loading/>}
      <div className="header">
        <h2>Мои публикации</h2>
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

      <PostsContainer>
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
      </PostsContainer>
    </Container>
  );
}

export default Profile;

const Container = styled("div")`
  height: 100%;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;

const PostsContainer = styled("div")`
  display: flex;
  width: 1140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 103px;
`;

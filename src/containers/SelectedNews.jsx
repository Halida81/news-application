import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import { useEffect } from "react";
import selectedNewsActions from "../store/actions/LikeActions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/ui/Loading";

function SelectedNews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedNews } = useSelector((state) => state.selectedNews);
  const { loading } = useSelector((state) => state.selectedNews);
  const data = useSelector((state) => state.like.unLike);
  useEffect(() => {
    dispatch(selectedNewsActions());
  }, [data]);

  const goToInnerPage = (id) => {
    navigate(`/megalab/news/${id}`);
  };

  return (
    <>
      <SelectTitle>Избранные новости</SelectTitle>
      <PostsContainer>
        {loading ? (
          <Loading />
        ) : (
          selectedNews?.map((news) => {
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
                wichIs="heart"
                onClick={() => {
                  goToInnerPage(news.id);
                }}
              />
            );
          })
        )}
      </PostsContainer>
    </>
  );
}
export default SelectedNews;
const SelectTitle = styled("p")`
  white-space: nowrap;
  text-align: center;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 55px;
  color: #000000;
  margin: 20px 0;
`;
const PostsContainer = styled("div")`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

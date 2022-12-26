import UserPageLayout from "../layout/UserPageLayout";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/ui/NewsCard";
import { useEffect } from "react";
import selectedNewsActions from "../store/actions/LikeActions";
import { useNavigate } from "react-router-dom";

function SelectedNews() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { selectedNews } = useSelector((state) => state.selectedNews);

  useEffect(() => {
    dispatch(selectedNewsActions());
  }, []);

  const goToInnerPage = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <UserPageLayout>
      {selectedNews.map((news) => {
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
      })}
    </UserPageLayout>
  );
}
export default SelectedNews;

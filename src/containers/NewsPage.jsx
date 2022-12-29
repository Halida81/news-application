import NewsCard from "../components/ui/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getNews from "../store/actions/NewsAction";
import PageLayout from "../layout/PageLayout";
import { useNavigate } from "react-router-dom";

function NewsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { token } = useSelector((state) => state.authSlice.user);
  const token = localStorage.getItem("my_token");
  const posts = useSelector((state) => state.news.posts);
  console.log(token);
  console.log(posts);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  const goToInnerPage = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <PageLayout>
      <div style={{ display: "flex" }}>
        <div>filter</div>
        <div>
          {posts?.map((post) => {
            return (
              <NewsCard
                key={post.id}
                id={post.id}
                tag={post.tag}
                text={post.text}
                title={post.title}
                image={post.image}
                isLike={post.is_liked}
                alt={post?.author}
                wichIs="heart"
                onClick={() => goToInnerPage(post.id)}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default NewsPage;

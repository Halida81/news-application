import NewsCard from "../components/ui/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getSelectedNews, { getNews } from "../store/actions/NewsAction";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading";
import styled from "styled-components";
import Button from "../components/ui/Button";
import getTag from "../store/actions/getTag";
import { useState } from "react";

function NewsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedTag, setSelectedTag] = useState([]);
  const posts = useSelector((state) => state.news.posts);
  const { loading } = useSelector((state) => state.news);
  const tag = useSelector((state) => state.getTag.tag);

  useEffect(() => {
    dispatch(getTag());
  }, []);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const goToInnerPage = (id) => {
    navigate(`/app/news/${id}`);
  };

  const onAddCategory = (isChecked, value) => {
    const temp = [...selectedTag];
    if (isChecked) {
      temp.push(value);
      setSelectedTag(temp);
      return;
    }

    setSelectedTag(temp.filter((item) => item !== value));
  };

  const applyHandler = () => {
    dispatch(getSelectedNews(selectedTag));
  };
  return (
    <Container>
      <div>
        <StyledFilterTitle>Фильтрация</StyledFilterTitle>
        <Tags>
          {tag
            ? tag?.map((el) => {
              return (
                <StyledCheckbox key={el.id}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      onAddCategory(e.target.checked, el.name)
                    }
                  />
                  <span>{el.name}</span>
                </StyledCheckbox>
              );
            })
            : ""}
        </Tags>

        <Button width="168px" height="30px" onClick={applyHandler}>
          Применить
        </Button>
      </div>
      <div className="loading">
        {loading ? (
          <span><Loading /></span>
        ) : (

          posts?.slice(0, 10).map((post, i) => {
            return (
              <NewsCard
                index={i}
                key={post?.id}
                id={post?.id}
                tag={post?.tag}
                text={post?.text}
                title={post?.title}
                image={post?.image}
                isLike={post?.is_liked}
                alt={post?.author}
                wichIs="heart"
                onClick={() => goToInnerPage(post.id)}
              />
            );
          })

        )}
      </div>
    </Container>
  );
}

export default NewsPage;


const Container = styled('div')`
   display: flex;
   justify-content: space-between;
   .loading{
   margin-right: 500px;
   }
      
`

const Tags = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

`
const StyledFilterTitle = styled("p")`
  display: flex;
  justify-content: flex-start;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const StyledCheckbox = styled("div")`
  margin: 14px 0;
  input {
    margin-right: 10px;
  }
`;




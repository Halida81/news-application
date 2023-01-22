import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getNewsDetail } from "../store/actions/NewsAction";
import { ReactComponent as DownIcon } from "../assets/icons/goBack.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as RedHeartIcon } from "../assets/icons/redHeart.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/share.svg";
import styled from "styled-components";
import { likeActions } from "../store/actions/LikeActions";
import Comment from "./Comment";
import Share from "./Share";
import Loading from "../components/ui/Loading";

function InnerPage() {
  const navigate = useNavigate();
  const [share, setShare] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.news);
  const data = post?.comment;

  useEffect(() => {
    dispatch(getNewsDetail(id));
  }, [id]);

  const likeHandler = (id) => {
    dispatch(likeActions({ id }));
  };

  const isShareHandler = () => {
    setShare((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <LoadingDiv>
          {" "}
          <Loading />
        </LoadingDiv>
      ) : (
        <Container>
          <StyledDownIcon onClick={() => navigate(-1)} />
          <div>
            <div className="header">
              <>12.12.2022</>
              <span onClick={() => likeHandler(id)}>
                {post?.is_liked ? <RedHeartIcon /> : <HeartIcon />}
              </span>
            </div>
            <div>
              <StyledTitle>{post?.title}</StyledTitle>
              <Img
                src={`https://megalab.pythonanywhere.com/${post?.image}`}
                alt="photo"
              />
              <p className="text">{post?.text}</p>
              <StyledShareDiv>
                <ShareIcon onClick={isShareHandler} />
                <span>{share ? <Share id={id} /> : ""}</span>
              </StyledShareDiv>
              <div>
                <StyledCommentTitle>Комментарий</StyledCommentTitle>

                <Comment data={data} id={post?.id} />
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default InnerPage;

const Container = styled("div")`
  width: 845px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .text {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #858080;
    margin-bottom: 20px;
  }
`;
const StyledShareDiv = styled("div")`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  height: 30px;
  margin-bottom: 20px;
  span {
    margin-top: -5px;
    margin-left: 20px;
  }
`;
const Img = styled("img")`
  width: 100%;
  height: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const LoadingDiv = styled("span")`
  display: flex;
`;
const StyledDownIcon = styled(DownIcon)`
  cursor: pointer;
`;
const StyledTitle = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;
const StyledCommentTitle = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
  color: #000000;
`;

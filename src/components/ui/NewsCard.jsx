import * as React from "react";
import { styled } from "@mui/material/styles";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as RedHeartIcon } from "../../assets/icons/redHeart.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import defaultIcon from "../../assets/icons/default.png";
import { useDispatch, useSelector } from "react-redux";
import { likeActions, unLikeActions } from "../../store/actions/LikeActions";
import deletePost from "../../store/actions/deletePost";
import Share from "../../containers/Share";

const FARTHER = ">>";

export default function NewsCard({
  id,
  isLike,
  title,
  text,
  tag,
  image,
  onClick,
  alt,
  wichIs,
  index,
}) {
  const dispatch = useDispatch();
  const [share, setShare] = React.useState(false);

  const { profile } = useSelector((state) => state.profile);
  const { nickname } = profile;

  const likeHandler = (id,tag) => {
    const data = {
      id,
      tag
    };
    dispatch(likeActions(data));
  };

  const unLikeHandler = (id, tag) => {
    const data = {
      id,
      tag
    };
    dispatch(unLikeActions(data));
  };
  const isShareHandler = () => {
    setShare((prev) => !prev);
  };

  const deletePostHandler = (id) => {
    dispatch(deletePost({ id, nickname }));
  };
  const wichIsHeartOrTrash = () => {
    if (wichIs === "trash") {
      return (
        <span onClick={() => deletePostHandler(id)}>
          <TrashIcon />
        </span>
      );
    }
    if (wichIs === "heart") {
      if (isLike) {
        return <RedHeartIcon onClick={() => unLikeHandler(id, tag)} />;
      } else {
        return (
          <span onClick={() => likeHandler(id, tag)}>
            <FavoriteIcon />
          </span>
        );
      }
    }
    return <TrashIcon />;
  };

  const titleHandler = () => {
    if (title.length < 100) {
      return title;
    }
    return title.slice(0, 90);
  };
  return (
    <Wrapper>
      <div>
        {image === null ? (
          <img src={defaultIcon} alt="z" />
        ) : (
          <Img src={`https://megalab.pythonanywhere.com/${image}`} alt={alt} />
        )}
      </div>

      <div className="section">
        <section>
          <p className="date">
            04.11.03 <span> TAG:{tag} </span>
          </p>
          {wichIsHeartOrTrash()}
        </section>
        <p className="header">{title.slice(0, 60)}</p>

        <p className="content">{text.slice(0, 200)}</p>

        <p className="more" onClick={onClick}>
          Читать дальше{FARTHER}
        </p>
        <div className="share">
          <ShareIcon onClick={isShareHandler} />
          {share && (
            <div className="icons">
              <Share id={id} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled("div")`
  width: 845px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  border-bottom: 1px solid #D9D9D9;
  .header {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
  .share {
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
  }
  .icons {
    margin-left: 20px;
  }

  .more {
    color: blue;
    border-bottom: 1px solid blue;
    cursor: pointer;
  }
  background-color: #d5e3ee;
  padding: 10px 20px;
  img {
    width: 255px;
    height: 211px;
  }
  .section {
    padding-left: 30px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .date {
    span {
      color: red;
    }
  }
`;
const Img = styled("img")`
  width: 255px;
  height: 211px;
`;

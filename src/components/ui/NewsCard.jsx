import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as RedHeartIcon } from "../../assets/icons/redHeart.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { likeActions } from "../../store/actions/LikeActions";
import deletePost from "../../store/actions/deletePost";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({}));

export default function NewsCard({
  id,
  isLike,
  creaDate,
  title,
  text,
  tag,
  image,
  onClick,
  alt,
  wichIs,
}) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const { profile } = useSelector((state) => state.profile);
  const { nickname } = profile;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likeHandler = (id) => {
    dispatch(likeActions({ id, dispatch }));
  };
  let a = ">>";

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
        return <RedHeartIcon />;
      } else {
        return (
          <span onClick={() => likeHandler(id)}>
            <FavoriteIcon />
          </span>
        );
      }
    }
    return <TrashIcon />;
  };

  return (
    <StyledCard id={id}>
      <StyledCardMedia
        component="img"
        src={`https://megalab.pythonanywhere.com/${image}`}
        alt={alt}
      />
      <CardContent>
        <CardDiv>
          <StyledCardHeader subheader={creaDate} />
          <IconButton aria-label="add to favorites">
            {wichIsHeartOrTrash()}
          </IconButton>
        </CardDiv>
        <StyledTypography>{title}</StyledTypography>
        <TextTypography style={{ marginTop: "25px" }}>
          {text.slice(0, 100)}
        </TextTypography>
        <ExpandMore onClick={handleExpandClick} aria-label="show more">
          <StyledMoreSpan onClick={onClick}>Читать дальше{a}</StyledMoreSpan>
        </ExpandMore>
        <br />
        <IconButton aria-label="share">
          <ShareIcon style={{ marginLeft: "3px" }} />
        </IconButton>
      </CardContent>
    </StyledCard>
  );
}

const StyledCardMedia = styled(CardMedia)`
  width: 255px;
  height: 211px;
`;

const StyledCardHeader = styled(CardHeader)`
  width: 81px;
  height: 24px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #858080;
`;

const CardDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: -30px;
`;

const StyledTypography = styled(Typography)`
  margin-left: 15px;
  width: 263px;
  height: 28px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-top: -10px;
`;

const TextTypography = styled(Typography)`
  width: 546px;
  height: 72px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #858080;
  margin-left: 15px;
  margin-top: 5px;
`;

const StyledMoreSpan = styled("span")`
  border-bottom: 1px solid #7e5bc2;
  width: 132px;
  height: 24px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e5bc2;
  margin-left: 5px;
  margin-top: -5px;
`;

const StyledCard = styled(Card)`
  max-width: 842px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 16px;
`;

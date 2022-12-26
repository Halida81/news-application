import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsDetail } from "../store/actions/NewsAction";
import { ReactComponent as DownIcon } from "../assets/icons/goBack.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as RedHeartIcon } from "../assets/icons/redHeart.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/share.svg";
import { BASE_URL } from "../utils/constants";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import styled from "styled-components";
import PageLayout from "../layout/PageLayout";
import { likeActions } from "../store/actions/LikeActions";

function InnerPage() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.news);


  useEffect(() => {
    dispatch(getNewsDetail({ id }));
  }, [id]);


  const likeHandler = (id) => {
    dispatch(likeActions({ id }));
  };


  return (
    <PageLayout>
      <div style={{ width: "845px", margin: "0 auto" }}>
        <DownIcon />
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <>12.12.2022</>
            <span onClick={() => likeHandler(id)}>
              {post?.is_liked ? <RedHeartIcon /> : <HeartIcon />}
            </span>
          </div>
          <div>
            <p>{post?.title}</p>
            <Img
              src={`https://megalab.pythonanywhere.com/${post?.image}`}
              alt="Здесь был фото :)"
            />
            <p>{post?.text}</p>
            <ShareIcon />
            <div style={{ marginBottom: "100px" }}>
              <p>Комментарий</p>
              {post?.comment.map((el) => {
                return (
                  <CommentDiv key={el.id}>
                    <CommentUser>
                      <h4>{el?.user?.name}</h4>
                      <h4>{el?.user?.last_name}</h4>
                    </CommentUser>
                    <p>{el?.text}</p>
                    <div
                      style={{
                        width: "200px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>12.12.2022</p>{" "}
                      <span
                        style={{
                          borderBottom: "1px solid blue",
                          color: "blue",
                        }}
                      >
                        Ответить
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <Input placeholder="Напишите комментарий" />
                      <Button style={{ marginLeft: "20px" }}>Ответить</Button>
                    </div>

                    {el?.child
                      ? el.child.map((el) => {
                          return (
                            <div
                              style={{
                                margin: "20px 0 20px 50px",
                              }}
                              key={el.id}
                            >
                              <CommentUser>
                                <h4>{el?.user?.name}</h4>
                                <h4>{el?.user?.last_name}</h4>
                              </CommentUser>
                              <p>{el?.text}</p>
                              <div
                                style={{
                                  width: "200px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>12.12.2022</p>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </CommentDiv>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default InnerPage;

const CommentDiv = styled("div")`
  width: 845px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #858080;
  margin-bottom: 24px;
`;
const CommentUser = styled("div")`
  display: flex;
  justify-content: start;
`;
const Img = styled("img")`
  width: 845px;
  height: 555px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

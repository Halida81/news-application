// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import styled from 'styled-components'
//  import { leaveReplyComment } from '../../store/actions/postActions'
//  import Button from '../components/ui/Button'
//  import Input from '../components/ui/Input'

//  const CommentList = ({ comments, isChild, postId }) => {

//     const [showNested, setShowNested] = useState({})
//   const [commentReply, setCommentReply] = useState('')

//   const dispatch = useDispatch()

//   const handleSubmit = (parentId) => {
//      console.log(postId, commentReply, parentId)

//     dispatch(leaveReplyComment({ postId, commentReply, parentId }))
// }

//     const toggleNested = (id) => { setShowNested({ ...showNested, [id]: !showNested[id] }) }

//     return ( <li className={isChild && 'child'}> {comments.map((comment) => {
//         return ( <Item key={comment.id}> <Author> {comment.user.name} {comment.user.last_name}
//          </Author> <ItemContainer> <CommentText>{comment.text}</CommentText>
//          <div className="date"> <Date>30.11.2022</Date>
//          {!isChild && ( <SButton type="text"
//          onClick={() => toggleNested(comment.id)} > Ответить
//          {comment.child?.length > 0 && (`${comment.child?.length}`)} </SButton> )}
//           </div> </ItemContainer>
//           {!isChild && ( <CommentSubmitBlock
//           style={{ marginLeft: 0, display: !showNested[comment.id] && 'none', }} >
//           <p>Вы</p>
//           <Input value={commentReply}
//           onChange={(e) => setCommentReply(e.target.value)}
//           placeholder="Написать комментарий" />
//           <Button onClick={() => handleSubmit(comment.id)}
//           type="primary" >
//           Ответить
//            </Button>
//             </CommentSubmitBlock> )}
//              <div style={{ display: !showNested[comment.id] && 'none' }}>
//                  {comment.child?.length > 0 &&
//                  ( <CommentList comments={comment.child}
//                     isChild={Boolean(comment.child?.length > 0)} /> )}
//                      </div> </Item> ) })} </li> )}
//           export default CommentList

<>
  {/* <div style={{ marginBottom: "100px" }}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "24px",
                  margin: "10px 0",
                }}
              >
                Комментарий
              </p> */}
  {/* {post?.comment.map((el) => {
                return (
                  <CommentDiv key={el.id}>
                    <CommentUser>
                      <h4 style={{}}>{el?.user?.name}</h4>
                      <h4>{el?.user?.last_name}</h4>
                    </CommentUser>
                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        marginBottom: "7px",
                      }}
                    >
                      {el?.text}
                    </p>

                    <div style={{ marginBottom: "24px" }}>
                      <span>12.12.2022</span>{" "}
                      <span
                        style={{
                          borderBottom: "1px solid blue",
                          color: "blue",
                          marginLeft: "30px",
                        }}
                      >
                        Ответить
                      </span>
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
              })} */}
  {/* <form
                onSubmit={submitHandler}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "521px",
                }}
              >
                <Input
                  width="348px"
                  height="38px"
                  placeholder="Напишите комментарий"
                  onChange={commentValueChangeHandler}
                  value={comment}
                />
                <Button type="submit" variant="comment">
                  Ответить
                </Button>
              </form> */}
  {/* </div> */}
</>;

<>
  {/* 
// const submitHandler = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     post: id,
  //     text: comment,
  //   };
  //   dispatch(commentActions(data));
  //   setComment("");
  // };

  // const commentValueChangeHandler = (e) => {
  //   setComment(e.target.value);
  // };
*/}
  {/* const CommentDiv = styled("div")`
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
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 7px;
`;

const StyledButton = styled(Button)`
  width: 128px;
  height: 38px;
  background-color: red;
`; */}
</>;

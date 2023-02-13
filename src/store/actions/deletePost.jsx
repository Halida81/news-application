import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import { showSuccessMessage } from "../../utils/helpers";
import getMyPosts from "./getMyPosts.Actions";



const deletePost = createAsyncThunk(
  "deletePost/deletePost",
  async ({ id, nickname }, { dispatch }) => {
    const token = localStorage.getItem("REMEMBER");
    const response = await fetch(
      `${BASE_URL}/post/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await response.json()
    showSuccessMessage('Успешно удалень!')
    dispatch(getMyPosts({ nickname }));
    return data;
  }
);

export default deletePost;

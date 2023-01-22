import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import { showSuccessMessage } from "../../utils/helpers";
import getMyPosts from "./getMyPosts.Actions";



const deletePost = createAsyncThunk(
  "deletePost/deletePost",
  async ({ id, nickname }, { dispatch }) => {
    const token = localStorage.getItem("REMEMBER");
    const response = await fetch(
      `https://megalab.pythonanywhere.com/post/${id}`,
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

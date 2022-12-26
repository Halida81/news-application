import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import getMyPosts from "./getMyPosts.Actions";

const deletePost = createAsyncThunk(
  "deletePost/deletePost",
  async ({ id, nickname }, { dispatch }) => {
    const response = await appFetch({
      method: "DELETE",
      url: `https://megalab.pythonanywhere.com/post/${id}`,
    });
    dispatch(getMyPosts({ nickname }));
    return response;
  }
);
export default deletePost;

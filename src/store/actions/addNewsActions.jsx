import { createAsyncThunk } from "@reduxjs/toolkit";
import getMyPosts from "./getMyPosts.Actions";
import profileActions from "./profileActions";

const addNewsActions = createAsyncThunk(
  "addNews/addNewsActions",
  async (data, { dispatch }) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("text", data.text);
    formData.append("image", data.image);
    formData.append("tag", data.tag);
    formData.append("short_desc", data.shortDescription);

    let token = localStorage.getItem("REMEMBER");

    try {
      const response = fetch("https://megalab.pythonanywhere.com/post/", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const result = (await response).json()
      const nickname = data.nickname;
      data.onClose();
      dispatch(profileActions());
      dispatch(getMyPosts({ nickname }));
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export default addNewsActions;

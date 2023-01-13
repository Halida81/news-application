import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import getSelectedNews from "./NewsAction";
import getNews, { getNewsDetail } from "./NewsAction";

export const likeActions = createAsyncThunk(
  "like/likeSlice",
  async (id, { dispatch }) => {
    const token = localStorage.getItem("REMEMBER");

    const response = await fetch("https://megalab.pythonanywhere.com/like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        post: id.id,
      }),
    });
    const data = response.json()
    dispatch(getNewsDetail(id.id));
    dispatch(getSelectedNews(id.tag));
    dispatch(getNews());

    return data;
  }
);

export const unLikeActions = createAsyncThunk(
  "like/likeSlice",
  async (id, { dispatch }) => {
    const token = localStorage.getItem("REMEMBER");

    const response = await fetch("https://megalab.pythonanywhere.com/like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        post: id.id,
      }),
    });
    const data = response.json()
    dispatch(getNewsDetail(id.id));
    dispatch(getSelectedNews(id.tag));
    dispatch(getNews());
    return data;
  }
);

const selectedNewsActions = createAsyncThunk("data/selectedNews", async () => {
  const token = localStorage.getItem("REMEMBER");
  const response = await fetch("https://megalab.pythonanywhere.com/like/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  const data = response.json()
  return data;
});
export default selectedNewsActions;

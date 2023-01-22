import { createAsyncThunk } from "@reduxjs/toolkit";
import {  showSuccessMessage } from "../../utils/helpers";
import getSelectedNews from "./NewsAction";
import  { getNewsDetail, getNews } from "./NewsAction";

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
        // tag:null
      }),
    });
    const data = response.json()
    dispatch(getNewsDetail(id.id));
    dispatch(getNews());
    showSuccessMessage('Успешно добавлен в избранные новости!')
    return data;
  }
);

export const unLikeActions = createAsyncThunk(
  "like/unlikeSlice",
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
        // tag:null
      }),
    });
    const data = response.json()
    dispatch(getNewsDetail(id.id));
    // dispatch(getSelectedNews(id.tag));
    dispatch(getNews());
showSuccessMessage('Успешно удалень из избранных новостей')
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

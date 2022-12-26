import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import getNews, { getNewsDetail } from "./NewsAction";

export const likeActions = createAsyncThunk(
  "like/ likeSlice",
  async ({ id }, { dispatch }) => {
    const response = await appFetch({
      method: "POST",
      url: `https://megalab.pythonanywhere.com/like/`,
      body: {
        post: id,
      },
    });
    dispatch(getNews());
    dispatch(getNewsDetail({ id }));
    return response;
  }
);

const selectedNewsActions = createAsyncThunk("data/selectedNews", async () => {
  const response = await appFetch({
    url: "https://megalab.pythonanywhere.com/like/",
  });
  return response;
});
export default selectedNewsActions;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await appFetch({
    url: "https://megalab.pythonanywhere.com/post/",
  });
  return response;
});
export default getNews;

export const getNewsDetail = createAsyncThunk(
  "newsDetail/getNewsDetail",
  async ({ id }) => {
    const response = await appFetch({
      url: `https://megalab.pythonanywhere.com/post/${id}`,
    });
    return response;
  }
);

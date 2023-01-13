import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNewsDetail = createAsyncThunk(
  "newsDetail/getNewsDetail",
  async (id) => {
    const token = localStorage.getItem("REMEMBER");
    const response = await fetch(
      `https://megalab.pythonanywhere.com/post/${id}/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = response.json()
    return data;
  }
);

export const getNews = createAsyncThunk("news/getNews", async () => {
  const token = localStorage.getItem("REMEMBER")
  const response = await fetch(
    "https://megalab.pythonanywhere.com/post/",
    {
      headers: {
        Authorization: `Token ${token}`
        ,
      },
    }
  );
  const data = response.json()
  return data;
});

const getSelectedNews = createAsyncThunk("news/news", async (selectedTag) => {
  let token = localStorage.getItem("REMEMBER");
  const response = await fetch(
    `https://megalab.pythonanywhere.com/post/?tag=${selectedTag}`,
    {
      headers: {
        Authorization:  `Token ${token}`,
      },
    }
  );
  const data = response.json()
  return data;
});
export default getSelectedNews;

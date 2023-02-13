import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

export const getNewsDetail = createAsyncThunk(
  "news/getNewsDetail",
  async (id) => {
    const token = localStorage.getItem("REMEMBER");
    const response = await fetch(`${BASE_URL}/post/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = response.json();
    return data;
  }
);

export const getNews = createAsyncThunk("news/getNews", async () => {
  const token = localStorage.getItem("REMEMBER");
  const response = await fetch(`${BASE_URL}/post/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  const data = response.json();
  return data;
});

const getSelectedNews = createAsyncThunk(
  "news/getSelectedNews",
  async (selectedTag) => {
    let token = localStorage.getItem("REMEMBER");
    const response = await fetch(`${BASE_URL}/post/?tag=${selectedTag}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = response.json();
    return data;
  }
);
export default getSelectedNews;

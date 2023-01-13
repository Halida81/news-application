import getSelectedNews, { getNews, getNewsDetail } from "../actions/NewsAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  error: "",
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getNews.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getNewsDetail.pending]: (state) => {
      state.loading = true;
    },
    [getNewsDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [getNewsDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getSelectedNews.pending]: (state) => {
      state.loading = true;
    },
    [getSelectedNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getSelectedNews.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default newsSlice;

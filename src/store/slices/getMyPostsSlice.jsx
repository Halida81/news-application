import { createSlice } from "@reduxjs/toolkit";
import getMyPosts from "../actions/getMyPosts.Actions";

const initialState = {
  myPosts: [],
  loading: null,
  error: "",
};

const getMyPostsSlice = createSlice({
  name: "myPosts",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyPosts.pending]: (state) => {
      state.loading = true;
    },
    [getMyPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.myPosts = action.payload;
    },
    [getMyPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getMyPostsSlice;

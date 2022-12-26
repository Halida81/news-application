import { createSlice } from "@reduxjs/toolkit";
import {  likeActions } from "../actions/LikeActions";

const initialState = {
  like: [],
  error: "",
  loading: false,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: {
    [likeActions.pending]: (state) => {
      state.loading = true;
    },
    [likeActions.fulfilled]: (state, action) => {
      state.like = action.payload;
    },
    [likeActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default likeSlice;



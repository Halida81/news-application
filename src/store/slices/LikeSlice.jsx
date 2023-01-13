import { createSlice } from "@reduxjs/toolkit";
import { likeActions, unLikeActions } from "../actions/LikeActions";

const initialState = {
  like: [],
  unLike: [],
  error: "",
  loading: false,
  isLike: false,
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
      state.isLike = true;
      state.like = action.payload;
    },
    [likeActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [unLikeActions.pending]: (state) => {
      state.loading = false;
    },
    [unLikeActions.fulfilled]: (state, action) => {
      state.loading = true;
      state.unLike = action.payload;
    },
    [unLikeActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default likeSlice;

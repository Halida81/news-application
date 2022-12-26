import { createSlice } from "@reduxjs/toolkit";
import deletePost from "../actions/deletePost";

const initialState = {
  loading: null,
  error: "",
  status: null,
};

const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {},
  extraReducers: {
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state) => {
      state.status = "succes";
    },
    [deletePost.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default deletePostSlice;

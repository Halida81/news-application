import { createSlice } from "@reduxjs/toolkit";
import comment, { commentReply } from "../actions/commentsActions.jsx";

const initialState = {
  comment: [],
  loading: null,
  error: "",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [comment.pending]: (state) => {
      state.loading = true;
    },
    [comment.fulfilled]: (state, action) => {
      state.loading = false;
      state.comment = action.payload;
    },
    [comment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [commentReply.pending]: (state) => {
      state.loading = true;
    },
    [commentReply.fulfilled]: (state, action) => {
      state.loading = false;
      state.comment = action.payload;
    },
    [commentReply.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice;

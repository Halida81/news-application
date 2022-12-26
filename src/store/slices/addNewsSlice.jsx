import { createSlice } from "@reduxjs/toolkit";
import addNewsActions from "../actions/addNewsActions";

const initialState = {
  myNews: [],
  loading: null,
  error: "",
};

const addNewsSlice = createSlice({
  name: "addNews",
  initialState,
  reducers: {},
  extraReducers: {
    [addNewsActions.pending]: (state) => {
      state.loading = true;
    },
    [addNewsActions.fulfilled]: (state, action) => {
      state.myNews = action.payload;
    },
    [addNewsActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default addNewsSlice;

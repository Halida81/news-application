import { createSlice } from "@reduxjs/toolkit";
import getTag from "../actions/getTag";

const initialState = {
  tag: [],
  loading: null,
  error: "",
};

const getTagSlice = createSlice({
  name: "getTag",
  initialState,
  reducers: {},
  extraReducers: {
    [getTag.pending]: (state) => {
      state.loading = true;
    },
    [getTag.fulfilled]: (state, action) => {
      state.tag = action.payload;
    },
    [getTag.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export default getTagSlice;

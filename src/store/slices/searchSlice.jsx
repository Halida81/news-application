import { createSlice } from "@reduxjs/toolkit";
import searchAction from "../actions/searchAction";

const initialState = {
  searchResult: [],
  error: "",
  loading: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [searchAction.pending]: (state) => {
      state.loading = true;
    },
    [searchAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchResult = action.payload;
    },
    [searchAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice;

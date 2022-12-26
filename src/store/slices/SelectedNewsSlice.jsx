import { createSlice } from "@reduxjs/toolkit";
import  selectedNewsActions  from "../actions/LikeActions";

const initialState = {
  selectedNews: [],
  loading: false,
  error: "",
};
const selectedNewsSlice = createSlice({
  name: "selectedNews",
  initialState,
  reducers: {},
  extraReducers: {
    [selectedNewsActions.pending]: (state) => {
      state.loading = true;
    },
    [selectedNewsActions.fulfilled] : (state, action) =>{
      state.selectedNews = action.payload
    },
    [selectedNewsActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default selectedNewsSlice
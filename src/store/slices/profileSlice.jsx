import { createSlice } from "@reduxjs/toolkit";
import profileActions from "../actions/profileActions";

const initialState = {
  profile: [],
  loading: null,
  error: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [profileActions.pending]: (state) => {
      state.loading = true;
    },
    [profileActions.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [profileActions.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default profileSlice;

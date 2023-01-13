import { createSlice } from "@reduxjs/toolkit";
import profileActions from "../actions/profileActions";
import profileChange from "../actions/profileChangeActions";

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
      state.loading = false;
      state.profile = action.payload;
    },
    [profileActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [profileChange.pending]: (state) => {
      state.loading = true;
    },
    [profileChange.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [profileChange.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice;

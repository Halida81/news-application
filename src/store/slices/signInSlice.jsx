import { createSlice } from "@reduxjs/toolkit";
import signInActions from "../actions/SignInActions";

const initialState = {
  loading: null,
  error: "",
  token: [],
};

const signInSlice = createSlice({
  name: "sign",
  initialState,

  reducers: {},
  extraReducers: {
    [signInActions.pending]: (state) => {
      state.loading = true;
    },
    [signInActions.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    },
    [signInActions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.response;
    },
  },
});

export default signInSlice

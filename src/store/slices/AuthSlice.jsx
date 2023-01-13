import { createSlice } from "@reduxjs/toolkit";
import signUpActions from "../actions/SignUpActions";

const initialState = {
  user: {
    id: null,
    name: null,
    last_name: null,
    nickname: null,
    profile_image: null,
    token: ''
  },
  loading: null,
  error: "",
  status: ""

};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpActions.pending]: (state) => {
      state.loading = true;
    },
    [signUpActions.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "succes"
      state.user = action.payload;
    },
    [signUpActions.rejected]: (state, action) => {
      state.loading = false;
      state.status = "failed"
      state.error = action.response.data.message
    },
  },
});

export const actionAuth = authSlice.actions;

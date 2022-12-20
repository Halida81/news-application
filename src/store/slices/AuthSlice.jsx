import { createSlice } from "@reduxjs/toolkit";
import { NEWS_APP_AUTH } from "../../utils/constants";

const initialState = {
  user: JSON.parse(localStorage.getItem(NEWS_APP_AUTH)) || {
    id: null,
    token: null,
    name: null,
    last_name: null,
    password: null,
    password2: null,
  },
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    baseAuth(state, action) {
      const newItem = action.payload;
    },
  },
});

export const actionAuth = authSlice.actions;

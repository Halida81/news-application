import { createAsyncThunk } from "@reduxjs/toolkit";
import { showInfoMessage } from "../../utils/helpers";

const signInActions = createAsyncThunk(
  "sign/sign",
  async (userData, { rejectWithValue }) => {
    const data = JSON.stringify({
      nickname: userData.nickname,
      password: userData.password,
    });
    try {
      const response = await fetch(
        "https://megalab.pythonanywhere.com/login/",
        {
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      const token = result?.token;
      localStorage.setItem("REMEMBER", token);
      showInfoMessage('Минутку...')
      return response;
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export default signInActions;

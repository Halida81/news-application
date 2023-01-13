import { createAsyncThunk } from "@reduxjs/toolkit";

const signUpActions = createAsyncThunk(
  "authSlice/authSlice",
  async (userData, { rejectWithValue }) => {
    let formdata = new FormData();
    formdata.append("nickname", userData.nickname);
    formdata.append("name", userData.name);
    formdata.append("last_name", userData.last_name);
    formdata.append("password", userData.password);
    formdata.append("password2", userData.password2);
    try {
      const response = await fetch(
        "https://megalab.pythonanywhere.com/registration/",
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);
export default signUpActions;

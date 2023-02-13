import { createAsyncThunk } from "@reduxjs/toolkit";
import { showSuccessMessage } from "../../utils/helpers";
import { BASE_URL } from "../../utils/constants";

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
        `${BASE_URL}/registration/`,
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await response.json();
      showSuccessMessage('Вы успешно зарегистрировались!')
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);
export default signUpActions;

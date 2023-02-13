import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
const profileActions = createAsyncThunk(
  "profile/profileAction",
  async () => {
    let token = localStorage.getItem("REMEMBER");

    const response = await fetch(`${BASE_URL}/user/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json()
    return data;
  }
);

export default profileActions;

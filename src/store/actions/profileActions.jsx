import { createAsyncThunk } from "@reduxjs/toolkit";

const profileActions = createAsyncThunk(
  "profile/profileAction",
  async () => {
    let token = localStorage.getItem("REMEMBER");

    const response = await fetch("https://megalab.pythonanywhere.com/user/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json()
    return data;
  }
);

export default profileActions;

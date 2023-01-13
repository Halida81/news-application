import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const profileActions = createAsyncThunk(
  "profile/profile",
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

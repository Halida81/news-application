import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import profileActions from "./profileActions";

const profileChange = createAsyncThunk(
  "profileDataChange/profileDataChange",
  async ({ nickname, name, last_name, profile_image }, { dispatch }) => {
    console.log(nickname, name, last_name, profile_image);
    const response = await appFetch({
      method: "PUT",
      headers: {
        "Content-type": "multipart/form-data",
      },
      url: "https://megalab.pythonanywhere.com/user/",
      body: {
        nickname,
        name,
        last_name,
        profile_image,
      },
    });
    console.log(response);
    dispatch(profileActions());
    return response;
  }
);

export default profileChange;

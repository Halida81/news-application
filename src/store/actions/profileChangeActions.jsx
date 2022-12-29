import { createAsyncThunk } from "@reduxjs/toolkit";
import profileActions from "./profileActions";

const profileChange = createAsyncThunk(
  "profile/profile",
  async (data, { dispatch }) => {
    const formData = new FormData();
    formData.append("nickname", data.nickname);
    formData.append("last_name", data.last_name);
    formData.append("name", data.name);
    formData.append(
      "profile_image",
      data.profile_image,
      data.profile_image.name
    );

    let token = localStorage.getItem("my_token");

    const response = fetch("https://megalab.pythonanywhere.com/user/", {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: `Token ${token}`,
        "content-length": `${data.profile_image.size}`,
      },
    });
    dispatch(profileActions());
    return response;
  }
);

export default profileChange;

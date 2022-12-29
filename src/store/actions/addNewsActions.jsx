import { createAsyncThunk } from "@reduxjs/toolkit";
import profileActions from "./profileActions";

const addNewsActions = createAsyncThunk(
  "addNews/addNewsActions",
  async (data, { dispatch }) => {

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("text", data.text);
    formData.append("image", data.image);
    formData.append("tag", data.tag);

    let token = localStorage.getItem("my_token");

    try {
      const response = fetch("https://megalab.pythonanywhere.com/post/", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Token " + token,
        },
      });

      data.onClose();
      dispatch(profileActions());
      return response;
      
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
);
export default addNewsActions;

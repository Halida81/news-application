import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const addNewsActions = createAsyncThunk(
  "addNews/addNewsActions",
  async ({ text, tag, image, title }) => {
    console.log(text, tag, image, title);
    const response = await appFetch({
      url: "https://megalab.pythonanywhere.com/post/",
      body: {
        title,
        text,
        image,
        tag,
      },
    });
    console.log(response);
    return response;
  }
);
export default addNewsActions;

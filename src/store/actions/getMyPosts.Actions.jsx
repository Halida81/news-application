import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const getMyPosts = createAsyncThunk(
  "myPosts/getMyPosts",
  async ({ nickname }) => {
    const response = await appFetch({
      url: `https://megalab.pythonanywhere.com/post/?author?=${nickname}`,
    });
    return response;
  }
);
export default getMyPosts;

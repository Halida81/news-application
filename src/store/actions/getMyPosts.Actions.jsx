import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";


const getMyPosts = createAsyncThunk("myPosts/myPosts", async ({ nickname }) => {
  const token = localStorage.getItem("REMEMBER");
  const response = await fetch(
    `https://megalab.pythonanywhere.com/post/?author?=${nickname}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  const data= await response.json()
  return data;
});

export default getMyPosts;

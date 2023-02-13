import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";
import { BASE_URL } from "../../utils/constants";


const getMyPosts = createAsyncThunk("myPosts/myPosts", async ({ nickname }) => {
  const token = localStorage.getItem("REMEMBER");
  const response = await fetch(
    `${BASE_URL}/post/?author?=${nickname}`,
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

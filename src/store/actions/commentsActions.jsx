import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsDetail } from "./NewsAction";
import { BASE_URL } from "../../utils/constants";

const commentstActions = createAsyncThunk(
  "comment/comment",
  async (obj, { dispatch }) => {
    let token = localStorage.getItem("REMEMBER");
    const response = await fetch(
      `${BASE_URL}/comment/`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    let id = obj.post;
    dispatch(getNewsDetail(id));
    const data = await response.json()
    return data;
  }
);

export default commentstActions;

export const commentReply = createAsyncThunk(
  "comment/comment",
  async (obj, { dispatch }) => {
    let token = localStorage.getItem("REMEMBER");
    const response = await fetch(
      `${BASE_URL}/comment/`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    let id = obj.post;
    dispatch(getNewsDetail(id));
    
    const data = await response.json()
    return data;
  }
);

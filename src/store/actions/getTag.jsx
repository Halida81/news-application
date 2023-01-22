import { createAsyncThunk } from "@reduxjs/toolkit";

const getTag = createAsyncThunk("getTag/getTag", async () => {
  let token = localStorage.getItem("REMEMBER");

  try {
    const response = await fetch("https://megalab.pythonanywhere.com/tag/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json()
    return data;
  } catch (error) {
  }
});

export default getTag;

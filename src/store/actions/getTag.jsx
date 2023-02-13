import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
const getTag = createAsyncThunk("getTag/getTag", async () => {
  let token = localStorage.getItem("REMEMBER");

  try {
    const response = await fetch(`${BASE_URL}/tag/` , {
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

const searchAction = createAsyncThunk("search/search", async (value) => {
  if(value.length < 3){
    return;
  }
  let token = localStorage.getItem("REMEMBER");

  const response = await fetch(
    `${BASE_URL}/post/?search=${value}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  const data = await response.json()
  return data;
});

export default searchAction;

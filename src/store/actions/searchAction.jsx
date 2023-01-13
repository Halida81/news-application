import { createAsyncThunk } from "@reduxjs/toolkit";

const searchAction = createAsyncThunk("search/search", async (value) => {
  if(value.length < 3){
    return;
  }
  let token = localStorage.getItem("REMEMBER");

  const response = await fetch(
    `https://megalab.pythonanywhere.com/post/?search=${value}`,
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

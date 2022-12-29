import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const getTag = createAsyncThunk("getTag/getTag", async () => {
  const response = await appFetch({
    url: "https://megalab.pythonanywhere.com/tag/",
  });
  return response;
});
export default getTag;

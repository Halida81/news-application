import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

const profileActions = createAsyncThunk("profile/getProfle", async () => {
  const response = await appFetch({
    url: "https://megalab.pythonanywhere.com/user/",
  });
  return response;
});
export default profileActions;

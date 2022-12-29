import { createAsyncThunk } from "@reduxjs/toolkit";
import { appFetch } from "../../api/CustomFetch";

export const getNewsDetail = createAsyncThunk(
  "newsDetail/getNewsDetail",
  async ({ id }) => {
    const response = await appFetch({
      url: `https://megalab.pythonanywhere.com/post/${id}`,
    });
    return response;
  }
);

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Token 6e404b6a3fc549d60f4bf00c55c3aeb7533d928a");

// var raw = "";

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://megalab.pythonanywhere.com/post/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// let token = localStorage.getItem("my_token");
// console.log(token);
// const getNews = createAsyncThunk("getNews/getNews", async () => {
//   const response = await fetch("https://megalab.pythonanywhere.com/post/", {
//     headers: {
//       "Authorization": `Token ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
//   return response;
// });
// export default getNews;

const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await appFetch({
    url: "https://megalab.pythonanywhere.com/post/",
  });
  return response;
});
export default getNews;

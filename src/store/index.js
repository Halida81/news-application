import { configureStore } from "@reduxjs/toolkit";
import addNewsSlice from "./slices/addNewsSlice";
import { authSlice } from "./slices/AuthSlice";
import commentSlice from "./slices/commentSilce";
import deletePostSlice from "./slices/deletePostSlice";
import getMyPostsSlice from "./slices/getMyPostsSlice";
import getTagSlice from "./slices/getTagSlice";
import likeSlice from "./slices/LikeSlice";
import newsSlice from "./slices/NewsSlice";
import profileSlice from "./slices/profileSlice";
import searchSlice from "./slices/searchSlice";
import selectedNewsSlice from "./slices/SelectedNewsSlice";
import signInSlice from "./slices/signInSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    sign: signInSlice.reducer,
    news: newsSlice.reducer,
    like: likeSlice.reducer,
    selectedNews: selectedNewsSlice.reducer,
    profile: profileSlice.reducer,
    addNews: addNewsSlice.reducer,
    myPosts: getMyPostsSlice.reducer,
    deletePost: deletePostSlice.reducer,
    getTag: getTagSlice.reducer,
    search: searchSlice.reducer,
    comment: commentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import addNewsSlice from "./slices/addNewsSlice";
import { authSlice } from "./slices/AuthSlice";
import deletePostSlice from "./slices/deletePostSlice";
import getMyPostsSlice from "./slices/getMyPostsSlice";
import getTagSlice from "./slices/getTagSlice";
import likeSlice from "./slices/LikeSlice";
import newsSlice from "./slices/NewsSlice";
import profileChangeSlice from "./slices/profileChangeSlice";
import profileSlice from "./slices/profileSlice";
import selectedNewsSlice from "./slices/SelectedNewsSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    news: newsSlice.reducer,
    like: likeSlice.reducer,
    selectedNews: selectedNewsSlice.reducer,
    profile: profileSlice.reducer,
    addNews: addNewsSlice.reducer,
    myPosts: getMyPostsSlice.reducer,
    deletePost: deletePostSlice.reducer,
    getTag: getTagSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

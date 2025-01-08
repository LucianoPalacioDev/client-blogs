import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "@/redux/reducers/blogsSlice";
import { blogsApi } from "@/redux/api/blogsApi";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogsApi.middleware),
});

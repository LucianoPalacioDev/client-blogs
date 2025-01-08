import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "@/redux/reducers/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
  },
});

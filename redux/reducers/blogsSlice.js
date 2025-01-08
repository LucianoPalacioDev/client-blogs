import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_INITIAL_STATE = {
  blogs: []
}

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: DEFAULT_INITIAL_STATE,
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { addBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
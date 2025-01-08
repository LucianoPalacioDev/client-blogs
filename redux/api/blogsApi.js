import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const customBaseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/blogs`,
});

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  tagTypes: ["Blogs"],
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      onQueryStarted: () => {
        console.log("getBlogs query started");
      },
      providesTags: ["Blogs"],
    }),
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "",
        method: "POST",
        body: blogData,
      }),
      onQueryStarted: () => {
        console.log("createBlog query started");
      },
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const { useGetBlogsQuery, useCreateBlogMutation } = blogsApi;

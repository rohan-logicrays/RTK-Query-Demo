/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/photos?_limit=9&_page=1",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;

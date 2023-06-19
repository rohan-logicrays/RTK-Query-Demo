import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const scrollSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 10) => `/photos?_limit=${page}`,
    }),
  }),
})

export const { useListPostsQuery } = scrollSlice
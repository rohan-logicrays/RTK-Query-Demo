import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pageSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1) => `/photos?_limit=9&_page=${page}`,
    }),
  }),
})

export const { useListPostsQuery } = pageSlice
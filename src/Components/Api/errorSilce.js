import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const errorSlice = createApi({
    reducerPath: 'errorSlice',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode1.com',
    }), 
    tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/photos',
    }),
  }),
})

export const { useGetPostsQuery } = errorSlice;
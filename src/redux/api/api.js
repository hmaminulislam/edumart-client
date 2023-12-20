import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const localApi = "http://localhost:5000";
const liveApi = "https://edumart-server.vercel.app";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: liveApi,
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/events`,
    }),
    getCourses: builder.query({
      query: () => `/courses`
    }),
    getBlogs: builder.query({
      query: () => `/blogs`
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`
    }),
  }),
});

export const { useGetEventsQuery, useGetCoursesQuery, useGetBlogsQuery, useGetBlogByIdQuery } = api;

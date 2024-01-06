import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const localApi = "http://localhost:5000";
const liveApi = "https://edumart-server.vercel.app";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: liveApi,
  }),
  endpoints: (builder) => ({
    // get all events
    getEvents: builder.query({
      query: () => `/events`,
    }),

    // get all courses
    getCourses: builder.query({
      query: () => `/courses`,
    }),

    // get all blogs
    getBlogs: builder.query({
      query: () => `/blogs`,
    }),

    // get single blog by id
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
    }),

    // get all products
    getProducts: builder.query({
      query: () => `/products`,
    }),

    // get product by id
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetEventsQuery, useGetCoursesQuery, useGetBlogsQuery, useGetBlogByIdQuery, useGetProductsQuery, useGetProductByIdQuery } = api;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const localApi = "http://localhost:5000";
const liveApi = "https://edumart-server.vercel.app";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: localApi,
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/events`,
    }),
  }),
});

export const { useGetEventsQuery } = api;

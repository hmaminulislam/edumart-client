import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./features/events/eventSlice";
import { api } from "./api/api";
import courseSlice from "./features/course/courseSlice";
import blogSlice from "./features/blog/blogSlice";


export const store = configureStore({
  reducer: {
    counter: eventSlice,
    course: courseSlice,
    blog: blogSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
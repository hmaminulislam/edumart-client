import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./features/events/eventSlice";
import { api } from "./api/api";
import courseSlice from "./features/course/courseSlice";


export const store = configureStore({
  reducer: {
    counter: eventSlice,
    course: courseSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./features/events/eventSlice";
import { api } from "./api/api";


export const store = configureStore({
  reducer: {
    counter: eventSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
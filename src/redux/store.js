import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/eventsApi";
import eventSlice from "./features/events/eventSlice";


export const store = configureStore({
  reducer: {
    counter: eventSlice,
    [api.reducerPath]: api.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});
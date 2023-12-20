import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
      categorySet: (state, actions) => {
          state.category = actions.payload;
    }
  },
});

export const { categorySet } = blogSlice.actions;

export default blogSlice.reducer;

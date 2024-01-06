import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: true,
  category: []
};

export const courseSlice = createSlice({
  name: "courseView",
  initialState,
  reducers: {
    courseViewChange: (state, actions) => {
      state.view = actions.payload;
    },
    filterCategory: (state, actions) => {

      const checkedToggle = actions.payload.checkedToggle;
      const checkValue = actions.payload.checkValue;

      if (!checkedToggle) {  
        const newCate = state.category.filter((cate) => cate !== checkValue)
        state.category = newCate;
      } else {
        state.category.push(checkValue)
      }
    }
  },
});

export const { courseViewChange, filterCategory } = courseSlice.actions;

export default courseSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  view: true,
  courseData: []
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
      if (checkedToggle) {
        const newData = state.courseData.filter((course) => course.category == checkValue)
        state.courseData = newData
      }
      console.log(current(state))
    }
  },
});

export const { courseViewChange, filterCategory } = courseSlice.actions;

export default courseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
    courseDataSet: (state, actions) => {
      state.courseData = actions.payload;
    }
  },
});

export const { courseViewChange, courseDataSet } = courseSlice.actions;

export default courseSlice.reducer;

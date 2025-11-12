import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define what one Course looks like
interface Course {
  _id: string;
  title?: string;
  description?: string;
  instructor?: string;
  credits?: number;
  // Add any other fields your app uses
}

// Define the structure of the slice state
interface CourseState {
  courses: Course[];
}

// Initial state
const initialState: CourseState = {
  courses: [],
};

// Create the slice
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [...state.courses, action.payload];
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
  },
});

// Export actions and reducer
export const { setCourses, addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;

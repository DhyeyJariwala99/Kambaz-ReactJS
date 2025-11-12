import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define what one course looks like
interface Course {
  _id: string;
  title?: string;
  description?: string;
  instructor?: string;
  credits?: number;
  // Add any other fields your app uses
}

// Define the slice state
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
    // Replace the whole array
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },

    // Add a new course
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [...state.courses, action.payload];
    },

    // Delete by _id
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },

    // Update a course by _id
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
  },
});

// Export the actions
export const { setCourses, addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

// Export the reducer
export default coursesSlice.reducer;

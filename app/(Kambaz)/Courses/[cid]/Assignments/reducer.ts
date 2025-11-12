import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define what one Assignment looks like
interface Assignment {
  _id: string;
  title?: string;
  description?: string;
  dueDate?: string;
  courseId?: string;
  // Add more fields if your data includes them
}

// Define the state structure
interface AssignmentState {
  assignments: Assignment[];
}

// Initial state
const initialState: AssignmentState = {
  assignments: [],
};

// Create the slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Replace the entire assignments array
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },

    // Add a single new assignment
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = [...state.assignments, action.payload];
    },

    // Delete an assignment by _id
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    // Update an existing assignment
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

// ✅ Export all the actions your components import
export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

// ✅ Export the reducer as default
export default assignmentsSlice.reducer;

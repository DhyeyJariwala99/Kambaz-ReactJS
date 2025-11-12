import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define what one Assignment looks like
interface Assignment {
  _id: string;
  title?: string;
  description?: string;
  dueDate?: string;
  // Add any other fields your app uses
}

// Define the shape of this slice of state
interface AssignmentState {
  assignments: Assignment[];
}

// Initial state
const initialState: AssignmentState = {
  assignments: [],
};

// Create slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = [...state.assignments, action.payload];
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

// Export actions and reducer
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;

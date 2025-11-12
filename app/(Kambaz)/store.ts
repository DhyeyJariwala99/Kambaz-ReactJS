import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import coursesReducer from "./Courses/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    modulesReducer,
    assignmentsReducer,
    coursesReducer,
  },
});

export default store;
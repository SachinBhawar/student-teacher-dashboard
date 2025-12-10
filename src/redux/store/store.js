import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../reducers/studentsSlice";
import teachersReducer from "../reducers/teachersSlice";
import coursesReducer from "../reducers/coursesSlice";

export const store = configureStore({
    reducer: {
        students: studentReducer,
        teachers: teachersReducer,
        courses: coursesReducer,
    },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [
        { id: 1, name: "Python", code: "PY01", credits: 3 },
        { id: 2, name: "HTML/CSS", code: "HT02", credits: 3 },
        { id: 3, name: "React", code: "RE03", credits: 3 },
        { id: 4, name: "Node", code: "NO04", credits: 3 },
        { id: 5, name: "Data Science", code: "DS05", credits: 4 },
        { id: 6, name: "AI/ML", code: "AI06", credits: 4 },
    ],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses.push(action.payload);
        },
    },
});

export const { addCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

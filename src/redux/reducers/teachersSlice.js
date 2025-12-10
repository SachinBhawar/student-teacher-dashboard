import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teachers: [
        { id: 1, name: "Prof. Krishna Jonnalagada", email: "kj@abc.com", assignedCourses: [] },
        { id: 2, name: "Prof. Salil Kulkarni", email: "sk@abc.com", assignedCourses: [] },
        { id: 3, name: "Prof. Dnyanesh Pavaskar", email: "dp@abc.com", assignedCourses: [] },
        { id: 4, name: "Prof. Tanmay Bhandakkar", email: "tb@abc.com", assignedCourses: [] },
        { id: 5, name: "Prof. S K Maiti", email: "sm@abc.com", assignedCourses: [] },
        { id: 6, name: "Prof. Kartik Sharma", email: "ks@abc.com", assignedCourses: [] },
    ],
};

const teachersSlice = createSlice({
    name: "teachers",
    initialState,
    reducers: {
        addTeacher: (state, action) => {
            state.teachers.push(action.payload);
        },
        assignCourse: (state, action) => {
            const { teacherId, courseId } = action.payload;
            const teacher = state.teachers.find((t) => t.id === teacherId);
            if (teacher && !teacher.assignedCourses.includes(courseId)) {
                teacher.assignedCourses.push(courseId);
            }
        },
    },
});

export const { addTeacher, assignCourse } = teachersSlice.actions;
export default teachersSlice.reducer;

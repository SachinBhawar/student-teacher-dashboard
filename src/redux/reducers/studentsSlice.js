import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [
        { id: 1, name: "Anjali Mishra", email: "anjali@abc.com", enrolledCourses: [] },
        { id: 2, name: "Raj More", email: "raj@abc.com", enrolledCourses: [] },
        { id: 3, name: "Kuldeep Yadav", email: "kuldeep@abc.com", enrolledCourses: [] },
        { id: 4, name: "Anita Wagh", email: "anila@abc.com", enrolledCourses: [] },
        { id: 5, name: "Chaitali Pavar", email: "chaitali@abc.com", enrolledCourses: [] },
        { id: 6, name: "Roshan Kumar", email: "kumar@abc.com", enrolledCourses: [] },
        { id: 7, name: "Fatima Begam", email: "fatima@abc.com", enrolledCourses: [] },
        { id: 8, name: "Sahil Shah", email: "sahil@abc.com", enrolledCourses: [] },
        { id: 9, name: "Mayuri Shetty", email: "mayuri@abc.com", enrolledCourses: [] },
        { id: 10, name: "Suraj Sharma", email: "Suraj@abc.com", enrolledCourses: [] },
    ],
};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        enrollStudent: (state, action) => {
            const { studentId, courseId } = action.payload;
            const student = state.students.find((s) => s.id === studentId);
            if (student && !student.enrolledCourses.includes(courseId)) {
                student.enrolledCourses.push(courseId);
            }
        },
    },
});

export const { addStudent, enrollStudent } = studentsSlice.actions;
export default studentsSlice.reducer;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../redux/reducers/studentsSlice";

const StudentsPage = () => {
    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch();
    const [newStudent, setNewStudent] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newStudent.name && newStudent.email) {
            dispatch(
                addStudent({
                    ...newStudent,
                    id: Date.now(),
                    enrolledCourses: [],
                })
            );
            setNewStudent({ name: "", email: "" });
        }
    };

    return (
        <div className="mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Students</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Student Name"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={newStudent.email}
                            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Student
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map((student) => (
                    <div key={student.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold">{student.name}</h3>
                        <p className="text-gray-600">{student.email}</p>
                        {/* <p className="text-sm text-gray-500"> */}
                        <p
                            className={
                                student.enrolledCourses.length === 0
                                    ? "text-sm font-bold text-red-600"
                                    : student.enrolledCourses.length > 2
                                    ? "text-sm font-bold text-green-600"
                                    : "text-sm font-bold text-grey-500"
                            }
                        >
                            Enrolled in {student.enrolledCourses.length} courses
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentsPage;

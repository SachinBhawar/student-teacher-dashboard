import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollStudent } from "../redux/reducers/studentsSlice";

const EnrollStudents = () => {
    const { students } = useSelector((state) => state.students);
    const { courses } = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const [selectedStudent, setSelectedStudent] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleEnroll = (e) => {
        e.preventDefault();
        if (selectedStudent && selectedCourse) {
            dispatch(
                enrollStudent({
                    studentId: parseInt(selectedStudent),
                    courseId: parseInt(selectedCourse),
                })
            );
            setSelectedStudent("");
            setSelectedCourse("");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Enroll Students in Courses</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <form onSubmit={handleEnroll} className="space-y-4">
                    <div>
                        <label className="block mb-2">Select Student</label>
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Choose a student</option>
                            {students.map((student) => (
                                <option key={student.id} value={student.id}>
                                    {student.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Select Course</label>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Choose a course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.name} ({course.code})
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Enroll Student
                    </button>
                </form>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Student Enrollments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {students.map((student) => {
                        const enrolledCourses = courses.filter((course) =>
                            student.enrolledCourses.includes(course.id)
                        );

                        return (
                            <div key={student.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
                                {enrolledCourses.length > 0 ? (
                                    <ul className="list-disc pl-5">
                                        {enrolledCourses.map((course) => (
                                            <li key={course.id} className="text-gray-700">
                                                {course.name} ({course.code})
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">Not enrolled in any courses</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default EnrollStudents;

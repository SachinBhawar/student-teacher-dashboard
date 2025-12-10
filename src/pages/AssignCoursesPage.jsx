import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignCourse } from "../redux/reducers/teachersSlice";

const AssignCoursesPage = () => {
    const { teachers } = useSelector((state) => state.teachers);
    const { courses } = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleAssign = (e) => {
        e.preventDefault();
        if (selectedTeacher && selectedCourse) {
            dispatch(
                assignCourse({
                    teacherId: parseInt(selectedTeacher),
                    courseId: parseInt(selectedCourse),
                })
            );
            setSelectedTeacher("");
            setSelectedCourse("");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Assign Courses to Teachers</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <form onSubmit={handleAssign} className="space-y-4">
                    <div>
                        <label className="block mb-2">Select Teacher</label>
                        <select
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Choose a teacher</option>
                            {teachers.map((teacher) => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.name}
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
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Assign Course
                    </button>
                </form>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Current Assignments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teachers.map((teacher) => {
                        const assignedCourses = courses.filter((course) =>
                            teacher.assignedCourses.includes(course.id)
                        );

                        return (
                            <div key={teacher.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2">{teacher.name}</h3>
                                {assignedCourses.length > 0 ? (
                                    <ul className="list-disc pl-5">
                                        {assignedCourses.map((course) => (
                                            <li key={course.id} className="text-gray-700">
                                                {course.name} ({course.code})
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">No courses assigned</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AssignCoursesPage;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/reducers/coursesSlice";
import CourseCard from "../components/CourseCard";

const CoursesPage = () => {
    const { courses } = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    const [newCourse, setNewCourse] = useState({ name: "", code: "", credits: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCourse.name && newCourse.code && newCourse.credits) {
            dispatch(
                addCourse({
                    ...newCourse,
                    id: Date.now(),
                    credits: parseInt(newCourse.credits),
                })
            );
            setNewCourse({ name: "", code: "", credits: "" });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Courses</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Course Name"
                            value={newCourse.name}
                            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Course Code"
                            value={newCourse.code}
                            onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Credits"
                            value={newCourse.credits}
                            onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        Add Course
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;

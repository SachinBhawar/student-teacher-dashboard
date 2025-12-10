import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTeacher } from "../redux/reducers/teachersSlice";

const TeachersPage = () => {
    const { teachers } = useSelector((state) => state.teachers);
    const dispatch = useDispatch();
    const [newTeacher, setNewTeacher] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTeacher.name && newTeacher.email) {
            dispatch(
                addTeacher({
                    ...newTeacher,
                    id: Date.now(),
                    assignedCourses: [],
                })
            );
            setNewTeacher({ name: "", email: "" });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Teachers</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Teacher</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Teacher Name"
                            value={newTeacher.name}
                            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={newTeacher.email}
                            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Add Teacher
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold">{teacher.name}</h3>
                        <p className="text-gray-600">{teacher.email}</p>
                        <p className="text-sm text-gray-500">
                            Assigned {teacher.assignedCourses.length} courses
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersPage;

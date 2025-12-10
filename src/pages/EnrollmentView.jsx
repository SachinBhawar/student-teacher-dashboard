import React from "react";
import { useSelector } from "react-redux";

const EnrollmentView = () => {
    const { students } = useSelector((state) => state.students);
    const { teachers } = useSelector((state) => state.teachers);
    const { courses } = useSelector((state) => state.courses);

    const getCourseTeacher = (courseId) => {
        const teacher = teachers.find((t) => t.assignedCourses.includes(courseId));
        return teacher ? teacher.name : "Not assigned";
    };

    const getStudentEnrollments = (studentId) => {
        const student = students.find((s) => s.id === studentId);
        return student
            ? student.enrolledCourses
                  .map((courseId) => {
                      const course = courses.find((c) => c.id === courseId);
                      return course
                          ? {
                                ...course,
                                teacher: getCourseTeacher(courseId),
                            }
                          : null;
                  })
                  .filter(Boolean)
            : [];
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Enrollment Overview</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Course Assignments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course) => {
                        const teacher = teachers.find((t) => t.assignedCourses.includes(course.id));
                        const enrolledStudents = students.filter((s) =>
                            s.enrolledCourses.includes(course.id)
                        );

                        return (
                            <div key={course.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold">{course.name}</h3>
                                <p className="text-gray-600">
                                    {course.code} - {course.credits} credits
                                </p>
                                <p className="mt-2">
                                    <span className="font-semibold">Teacher:</span>{" "}
                                    {teacher ? teacher.name : "Not assigned"}
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold">Enrolled Students:</span>{" "}
                                    {enrolledStudents.length}
                                </p>
                                {enrolledStudents.length > 0 && (
                                    <div className="mt-2">
                                        <p className="font-semibold">Students:</p>
                                        <ul className="list-disc pl-5">
                                            {enrolledStudents.map((student) => (
                                                <li key={student.id} className="text-sm text-gray-700">
                                                    {student.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Student Enrollments</h2>
                <div className="space-y-4">
                    {students.map((student) => {
                        const enrollments = getStudentEnrollments(student.id);

                        return (
                            <div key={student.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
                                <p className="text-gray-600 mb-3">{student.email}</p>

                                {enrollments.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                                        Course
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                                        Code
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                                        Teacher
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                                        Credits
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {enrollments.map((course) => (
                                                    <tr key={course.id}>
                                                        <td className="px-4 py-2 whitespace-nowrap">
                                                            {course.name}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap">
                                                            {course.code}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap">
                                                            {course.teacher}
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap">
                                                            {course.credits}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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

export default EnrollmentView;

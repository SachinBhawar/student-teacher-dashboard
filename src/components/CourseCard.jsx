import React from "react";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
            <p className="text-gray-600">Code: {course.code}</p>
            <p className="text-gray-600">Credits: {course.credits}</p>
        </div>
    );
};

export default CourseCard;

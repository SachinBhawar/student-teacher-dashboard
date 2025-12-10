import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex space-x-6">
                    <NavLink
                        to="/students"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Students
                    </NavLink>
                    <NavLink
                        to="/teachers"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Teachers
                    </NavLink>
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to="/assign-courses"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Assign Courses
                    </NavLink>
                    <NavLink
                        to="/enroll-students"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Enroll Students
                    </NavLink>
                    <NavLink
                        to="/enrollment-view"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold" : "hover:text-blue-300"
                        }
                    >
                        Enrollment View
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

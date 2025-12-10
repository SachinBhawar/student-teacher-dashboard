import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import TeachersPage from "./pages/TeachersPage";
import NotFoundPage from "./pages/AssignCoursesPage";
import EnrollStudents from "./pages/EnrollStudents";
import AssignCoursesPage from "./pages/AssignCoursesPage";
import Navbar from "../src/components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/students" exact element={<StudentsPage />} />
                <Route path="/enroll-students" exact element={<EnrollStudents />} />
                <Route path="/teachers" exact element={<TeachersPage />} />
                <Route path="/courses" exact element={<CoursesPage />} />
                <Route path="/assign-courses" exact element={<AssignCoursesPage />} />
                <Route path="/enrollment-view" exact element={<EnrollStudents />} />

                {/* NotFoundPage would be rendered if an invalid route */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;

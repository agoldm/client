import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import TeacherDeshBoard from "./components/TeacherDeshBoard";
import Register from "./components/Register";
import Information from "./components/Information";
import StudentDeshBoard from "./components/StudentDeshBoard";
import Profile from "./components/Profile";
import Context from "./context";

function Routers() {

    const { role } = React.useContext(Context)
    return (


        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/teacher-deshboard" element={<TeacherDeshBoard />} />
                <Route path="/student-deshboard" element={<StudentDeshBoard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/information" element={<Information />} />
                <Route path="/information" element={<Information />} />
                <Route path="/profile" element={<Profile />} />
                {/* {(role=='admin') && <Route path="/profile" element={<Profile />} />} */}
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default Routers;
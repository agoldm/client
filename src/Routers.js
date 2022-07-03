import React from "react";
import { Route, Routes } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import TeacherDeshBoard from "./components/TeacherDeshBoard";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/register" element={<Register />} />
                <Route path="/teacher-deshboard" element={<TeacherDeshBoard />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default Routers;
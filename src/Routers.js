import React from "react";
import { Route, Routes } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import TeacherDeshBoard from "./components/TeacherDeshBoard";
import Register from "./components/Register";
import Information from "./components/Information";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/teacher-deshboard" element={<TeacherDeshBoard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/information" element={<Information />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default Routers;
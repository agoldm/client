import React from "react";
import { Route, Routes } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default Routers;
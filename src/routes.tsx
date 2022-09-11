import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Board from "./pages/Board/index";

export default function classRoutes() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:id" element={<Board />} />
    </Routes>
  );
}

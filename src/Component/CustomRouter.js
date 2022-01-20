import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Deatil from "../Pages/Deatils/Deatil";
function CustomRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:eventid" element={<Deatil />} />
      </Routes>
    </div>
  );
}

export default CustomRouter;

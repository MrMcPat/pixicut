import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelfData } from "../store/self-actions";

import NavBar from "./navbar/NavBar";
import LandingPage from "./landingpage/LandingPage";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Homepage from "./homepage/Homepage";
import Canvas from "./canvas/Canvas";

function App() {
  const dispatch = useDispatch();
  const self = useSelector((state) => state.self.me);

  useEffect(() => {
    dispatch(fetchSelfData());
  }, [dispatch]);

  return (
    <div>
      <NavBar self={self} />
      <Routes>
        {self ? (
          <Route path="/" element={<Homepage self={self} />} />
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;

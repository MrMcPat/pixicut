import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelfData } from "../store/self-actions";
import { fetchUsersData } from "../store/users-actions";

import NavBar from "./navbar/NavBar";
import LandingPage from "./landingpage/LandingPage";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Homepage from "./homepage/Homepage";
import CanvasInputs from "./canvas/CanvasInputs";
import Canvas from "./canvas/Canvas";
import UserDashboard from "./userpages/UserDashboard";
import UserSettings from "./userpages/UserSettings";

function App() {
  const dispatch = useDispatch();
  const self = useSelector((state) => state.self.me);

  useEffect(() => {
    dispatch(fetchSelfData());
    dispatch(fetchUsersData());
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
        <Route path="/createdrawing" element={<CanvasInputs />} />
        <Route path="/createdrawing/:id" element={<Canvas />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/usersettings" element={<UserSettings />} />
      </Routes>
    </div>
  );
}

export default App;

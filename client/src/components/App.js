import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelfData } from "../store/self-actions";

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

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
        <Route path="/" element={<Homepage self={self} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

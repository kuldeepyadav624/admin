import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Private from "./Components/Private";
import EmpDetails from "./Components/EmpDetails";
import Blood from "./Components/Blood";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/empdetails" element={<EmpDetails />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

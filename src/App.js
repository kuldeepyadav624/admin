import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Private from "./Components/Private";
 import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div>
  <BrowserRouter>
   <Routes>
          <Route element={<Private />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
>>>>>>> bfe79d3957e04a0dc5901f74134a91ca4a8f17b5
  );
}

export default App;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import Profile from './pages/Pofile/Profile';


import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/search" element={<Search />} />

        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;



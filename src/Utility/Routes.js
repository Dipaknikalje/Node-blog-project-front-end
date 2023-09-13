import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Bollywood from "../Pages/Bollywood";
import Technology from "../Pages/Technology";
import Hollywood from "../Pages/Hollywood";
import Fitness from "../Pages/Fitness";
import Food from "../Pages/Food";
import Article from "../Pages/Article";
import RegisterPage from "../Components/Authorisation/Register/RegisterPage";
import LoginPage from "../Components/Authorisation/Buttons/Login/LoginPage";
import Private from "./Private";

function RouteComp() {
  // const isLoggedIn=window.localStorage.getItem("loggedIn")
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Hollywood" element={<Hollywood />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Food" element={<Food />} />
        <Route path="article/:Id" element={<Private Component={Article} />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default RouteComp;

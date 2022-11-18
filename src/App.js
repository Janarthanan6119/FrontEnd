import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Login from "./login";
//import Navbar from "./navbar";
import Sign from "./sign";
//import NavBar from './navbar'

export default function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <NavBar/> */}

      <Router>
        
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/sign">Sign-Up</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<Sign />} /> 
        </Routes>
      </Router>
    </div>
  );
}

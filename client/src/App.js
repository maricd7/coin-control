import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
    </Routes>
</Router>
  );
}

export default App;

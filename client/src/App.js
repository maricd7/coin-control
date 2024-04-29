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
import Signup from './pages/signup';
import {TransactionContextProvider} from './contexts/TransactionContext';
import Charts from './pages/charts';


function App() {
  return (
 
    <Router>
          <TransactionContextProvider>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/charts' element={<Charts />}/>
    </Routes>
    </TransactionContextProvider>
</Router>

  );
}

export default App;

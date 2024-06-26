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
import Landing from './pages/landing';
import Profile from './pages/profile';


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
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </TransactionContextProvider>
</Router>

  );
}

export default App;

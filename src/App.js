// App.js

import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import AdminTable from './pages/Admin';
import Home from './pages/Home';
import About from './pages/About';



const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} /> 
            <Route path="/home" element={<Home/>} /> 
            <Route path="/admin" element={<AdminTable/>} /> 
            <Route path="/createaccount" element={<CreateAccount />} /> 
            <Route path="/about" element={<About/>} >/
            </Route>
          </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Home from './component/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Home/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/register" element={< Register/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

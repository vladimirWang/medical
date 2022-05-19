import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AuthLayout from './components/AuthLayout.jsx'
console.log(AuthLayout);
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthLayout><Home /></AuthLayout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

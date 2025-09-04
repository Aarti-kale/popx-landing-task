import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Profile from './Components/Profile';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />


 </Routes>
    </Router>
  );
}

export default App;

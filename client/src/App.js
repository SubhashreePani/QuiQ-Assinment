import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import InteractiveImage from './components/InteractiveImage';
import AuthPage from './components/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/interactive-image" element={<InteractiveImage />} />
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;

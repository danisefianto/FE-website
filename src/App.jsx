import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Redirect to login page for now */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Add more routes as we build the app */}
      </Routes>
    </Router>
  );
}

export default App;
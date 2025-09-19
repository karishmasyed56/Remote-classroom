import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (type, name) => {
    setUserType(type);
    setUserName(name);
    if (type === "student") navigate("/student");
    else navigate("/teacher");
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/student" element={<StudentDashboard name={userName} />} />
      <Route path="/teacher" element={<TeacherDashboard name={userName} />} />
    </Routes>
  );
}

export default App;

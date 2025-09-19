import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role, name);
  };

  return (
    <div style={{textAlign:"center",padding:"50px",background:"#eaf3ff",height:"100vh"}}>
      <h1 style={{color:"#004aad"}}>Remote Classroom Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
          style={{padding:"10px",margin:"10px"}}
        />
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{padding:"10px",margin:"10px"}}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <br />
        <button type="submit" style={{padding:"10px 20px",background:"#004aad",color:"white",border:"none",cursor:"pointer"}}>Login</button>
      </form>
    </div>
  );
}

export default Login;

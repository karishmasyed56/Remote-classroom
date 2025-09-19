import React, { useState } from 'react';

function TeacherDashboard({ name }) {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState("");

  const addClass = () => {
    if (newClass) {
      setClasses([...classes, newClass]);
      setNewClass("");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h2 style={{color:"#004aad"}}>Welcome, {name} (Teacher)</h2>
      
      <h3>➕ Create Class</h3>
      <input 
        type="text" 
        placeholder="Class name" 
        value={newClass} 
        onChange={(e) => setNewClass(e.target.value)} 
      />
      <button onClick={addClass} style={{marginLeft:"10px",padding:"5px 15px",background:"#004aad",color:"white"}}>
        Add
      </button>
      <ul>
        {classes.map((c,i)=>(<li key={i}>{c}</li>))}
      </ul>

      <h3>📂 Upload Notes</h3>
      <input type="file" />
      
      <h3>🎥 Add Video</h3>
      <input type="text" placeholder="Paste video link" />
    </div>
  );
}

export default TeacherDashboard;

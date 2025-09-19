import React from 'react';

function StudentDashboard({ name }) {
  return (
    <div style={{padding:"20px"}}>
      <h2 style={{color:"#004aad"}}>Welcome, {name} (Student)</h2>
      <h3>📚 Classes</h3>
      <ul>
        <li>AI Basics</li>
        <li>VLSI Intro</li>
        <li>Renewable Energy 101</li>
      </ul>

      <h3>📝 Notes</h3>
      <ul>
        <li><a href="#">AI Notes.pdf</a></li>
        <li><a href="#">VLSI Notes.pdf</a></li>
      </ul>

      <h3>🎥 Video Lectures</h3>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <br/>
      <button style={{marginTop:"10px",padding:"10px",background:"#004aad",color:"white"}}>
        Switch to Audio Only
      </button>
    </div>
  );
}

export default StudentDashboard;

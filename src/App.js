import logo from './SWE_Logo_4C.png';
import './App.css';
import React, { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('');
  const [netID, setNetID] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, netID, year, major })
    })
    .then(response => response.json())
    .then(data => {
      // handle the response from the server here
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

  return (
    <div className ='attendance_form'>
      <img src={logo} alt='SWE logo' style={{width: '200px'}} />
      <h1>SWE Attendance Form</h1>
      <h4>For new members, please fill out the all information. </h4>
      <h4>For returning members, please only fill out name and netID.</h4>
      <form className = 'form' onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
        <label htmlFor="netID">netID:</label>
        <input type="text" id="netID" value={netID} onChange={(e) => setNetID(e.target.value)}></input><br></br>
        <label htmlFor="year">Class Year:</label>
        <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)}></input><br></br>
        <label htmlFor="major">Major:</label>
        <input type="text" id="major" value={major} onChange={(e) => setMajor(e.target.value)}></input><br></br>
        <input type="submit" id="submit" value="Submit"></input><br></br>
      </form>
    </div>
  );
}

export default MyComponent;
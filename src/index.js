//import React from "react";
import React, { useState } from 'react';

import ReactDOM from "react-dom" ;

import logo from './SWE_Logo_4C.png';

//const element =<h1>Hello World</h1>;
//ReactDOM. render(element, document. getElementById("root"));

function Header(){
          
    return(     
        <img src={logo} alt='logo' />,
        <h1>SWE Attendence Form</h1>    
    );
}

//export default Header;


function AttendanceForm() {
  const [name, setName] = useState('');
  const [netID, setNetID] = useState('');
  const [classYear, setClassYear] = useState('');
  const [major, setMajor] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Write code to submit attendance data to backend API
    // and update attendance.csv file
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="netID">NetID:</label>
        <input 
          type="text" 
          id="netID" 
          value={netID} 
          onChange={(event) => setNetID(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="classYear">Class Year:</label>
        <input 
          type="text" 
          id="classYear" 
          value={classYear} 
          onChange={(event) => setClassYear(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="major">Major:</label>
        <input 
          type="text" 
          id="major" 
          value={major} 
          onChange={(event) => setMajor(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AttendanceForm;

import logo from './SWE_Logo_4C.png';
import './App.css';
import React from 'react';

function MyComponent() {
  return (
    <div class ='attendence_form'>
      <img src={logo} alt='SWE logo' style={{width: '200px'}} />
      <h1>SWE Attendence Form</h1>
      <h4>For new members, please fill out the all information. </h4>
      <h4>For returning members, please only fill out name and netID.</h4>
      <form class = 'form'>
        <label for="name">Full Name:</label>
        <input type="text" id="name" value="Name"></input><br></br>
        <label for="netID">netID:</label>
        <input type="text" id="year" value="netID"></input><br></br>
        <label for="year">Class Year:</label>
        <input type="text" id="year" value="Class Year"></input><br></br>
        <label for="major">Major:</label>
        <input type="text" id="major" value="Major"></input><br></br>
        <input type="submit" id="submit" value="Submit"></input><br></br>
      </form>
    </div>
  );
}

export default MyComponent;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
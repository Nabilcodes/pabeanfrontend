// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Login from './components/login';


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
//         <Login />
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Use fetch or any other method to send the data to http://somecode.com
//     fetch('http://35.213.169.90/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'User-Agent': 'PostmanRuntime/7.37.3',
//         'Accept': '*/*',
//         'Postman-Token': 'dbfd9c70-34cc-4dcb-b9e4-953c56ca6433',
//         'Host': '35.213.169.90',
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Connection': 'keep-alive',
//         'Content-Length': '75',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         // Handle response
//         console.log(response);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Login</button>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use fetch or any other method to send the data to http://somecode.com
    fetch('https://thingproxy.freeboard.io/fetch/http://35.213.169.90/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.37.3', // Custom headers like this will not work with 'no-cors'
        'Postman-Token': 'dbfd9c70-34cc-4dcb-b9e4-953c56ca6433',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;



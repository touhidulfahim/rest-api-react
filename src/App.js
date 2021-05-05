import logo from './logo.svg';
import './App.css';
import React from 'react';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    //let a = 
    //Fetch-API START
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    //Fetch-API END




    //GET/AXIOS-API START
    axios.get('http://localhost:3001/dishes')
      .then(response => response.data)
      .then(data => console.log(data))
      .catch(error => console.log(error.message));

    //POST/Insert-API
    axios.post('http://localhost:3001/dishes', { name: "pizza", price: "699" })
      .then(response => console.log(response));

    //PUT/UPDATE-API
    axios.put('http://localhost:3001/dishes/1', { name: "pizza", price: "950" })
      .then(response => console.log(response));

    //DELETE-API
    axios.delete('http://localhost:3001/dishes/3')
      .then(response => console.log(response));


    //AXIOS-API END

  }
  render() {
    return (
      <div>
        <h2 className="text-center" style={{ textAlign: "center" }}>REST API</h2>
      </div>
    );
  }
}


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

export default App;

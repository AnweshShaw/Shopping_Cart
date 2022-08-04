import React, { Component } from 'react';
import NavBar from './components/navbar';
//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, my name is Anwesh !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component 
{
  
  render() {
    return(
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <center><Counters/></center>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

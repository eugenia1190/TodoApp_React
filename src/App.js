import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count, length} from './numbers.js';

const cat = 'Boris';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style ={{
          color: 'pink'
        }}>
          {cat}
        </p>
        <p> {123} </p>
        <p> {15 + 15} </p>
        <p> {15 && cat} </p>
        <p> {cat ? 'cat is true': 'cat is false'} </p>
        <p> {null} </p>
        <p> {undefined} </p>
        <p> {false} </p>
        <p> {true} </p>
        <p> {"count * length = " + count + length} </p>
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
}

export default App;

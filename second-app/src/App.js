import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./component/Input"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Input placeholder="enter herer" type="text"></Input>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameTag from "./components/nameTag";
import NameTag2 from "./components/nameTag2"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        <NameTag name="jian"></NameTag>
        <NameTag2 >Jian</NameTag2>
        <NameTag></NameTag>


      </header>
    </div>
  );
}

export default App;

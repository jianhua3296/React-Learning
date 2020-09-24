import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameTag from "./components/nameTag";
import NameTag2 from "./components/nameTag2";
import NameTag3 from "./components/nameTag3"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        {/* passing first and last name as prob member variables, component destruct them and get their values respectively */}
        <NameTag firstName="jianhua" lastName="Code"></NameTag>
        {/* passing name as prob children  */}
        <NameTag2 >Jian</NameTag2>
        <NameTag2>Faker</NameTag2>
        {/* conditional rendering */}
        <NameTag3></NameTag3>
        <NameTag3 firstName="john"></NameTag3>
      

      </header>
    </div>
  );
}

export default App;

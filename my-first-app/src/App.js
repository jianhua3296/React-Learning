import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameTag from "./components/nameTag";
import NameTag2 from "./components/nameTag2";
import NameTag3 from "./components/nameTag3";
import NameTag4 from "./components/nameTag4";


//takes a BaseComponent and return a component with extra stuff
const makePurple = BaseComponent => props =>{

  const addPurple = {
    style:{
      color:"purple"
    }
  }
  const newProps = {
    ...props,...addPurple
  }

  return <BaseComponent{...newProps}/>
}


const PurpleNameTag = makePurple(NameTag4);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name List</h1>
        {/* passing first and last name as prob member variables, component destruct them and get their values respectively */}
        <NameTag firstName="1: jianhua" lastName="Code"></NameTag>
        {/* passing name as prob children  */}
        <NameTag2 >2: Jian</NameTag2>
        <NameTag2>3: Faker</NameTag2>
        {/* conditional rendering */}
        <NameTag3></NameTag3>
        <NameTag3 firstName="john"></NameTag3>
        <PurpleNameTag firstName="4: try" lastName="yo"></PurpleNameTag>

      </header>
    </div>
  );
}

export default App;

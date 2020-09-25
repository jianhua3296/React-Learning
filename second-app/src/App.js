import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Input placeholder="enter herer" type="text"></Input>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <ul className="goal-list">
        <li>Finish the Course</li>
        <li>Learn all about the topics</li>
        <li>Help other students</li>
        <li>whatever you like</li>
      </ul>
    </div>
  );
};
export default App;

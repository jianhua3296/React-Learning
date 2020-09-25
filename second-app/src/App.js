import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";
import GoalList from "./component/GoalList";

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
  const courseGoals = [
    {
      id: "cg1",
      text: "Finish the Course",
    },
    {
      id: "cg2",
      text: "Learn all about the topics",
    },
    {
      id: "cg3",
      text: "Help other students",
    },
    {
      id: "cg4",
      text: "whatever you like",
    }
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals[0]}/>
    </div>
  );
};
export default App;

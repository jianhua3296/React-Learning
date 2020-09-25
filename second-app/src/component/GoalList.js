import React from "react";
import "./GoalList.css";

export default (props) => {

    // console.log(props.goals);
  return (
      
    <ul className="goal-list">
      {
          //map() is a javascript fuction, which can perform on every array by syntax array.map(functionName)
          // magic moment: it will call functionName() function on every element of the array,
          // let say functionName()={console.log("瓜皮")} and there are 10 element in array,
          // it will print 瓜皮 10 times to the console. map() is usually used to perform same operation to array elements.
          //here we pass in an arrow function, the array function take an element from props.goals, convert it to JSX object and return. 
          // REMEMBER!!!!!
          // REACT COMPONENT can only return JSX object, not javascript object. All the hassles here are meant to serve the purpose of converting the JS array of object to JSX array of object
          props.goals.map((goal)=>{
              return <li key={goal.id}>{goal.text}</li>;
          })
      }
    </ul>
  );
};

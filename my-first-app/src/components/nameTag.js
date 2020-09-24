import React from "react";

// 3 ways to export a component

// export default function nameTag(){
//     return <h3 className="name">Jian</h3>
// }

// function nameTag(){
//     return <h3 className="name">Jian</h3>
// }
// export default nameTag;

export default (prop) => {
  // {prop.name}:  google search javascript destructing,
  // the thing in {}, will only take the object's variable named "name" to store in this {},
  // for example, prop={name:"john", age:2}, then {prop.name} equals "john", {prop.age} equals 2
  // easy!!!

  //because react can only export 1 single whole component at a time, we have to wrap the following 2 tags together.
  // First way to do it, wrap it with <div></div>, which will introduce a extra layer and mess up the styling, not recommended.
  // Second way to do it, wrap it with <></>, which is called Fragment in React, this way it will wrap up whatever inside of the empty tag and return only the content inside of it as a single whole component, the empty tag will be removed once returned. Good shit!
  // Third way to do it, wrap all of the content inside an array using [], not recommended.
  return (
    <>
    
      <h3 className="name">{prop.firstName}</h3>
      <h3 className="name">{prop.lastName}</h3>
    </>
  );
};

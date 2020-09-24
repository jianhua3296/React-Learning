import React from 'react';


// 3 ways to export a component

// export default function nameTag(){
//     return <h3 className="name">Jian</h3>
// }


// function nameTag(){
//     return <h3 className="name">Jian</h3>
// }
// export default nameTag;


export default (prop)=>{
    // {prop.name}:  google search javascript destructing,
    // the thing in {}, will only take the object's variable named "name" to store in this {},
    // for example, prop={name:"john", age:2}, then {prop.name} equals "john", {prop.age} equals 2
    // easy!!!
    return <h3 className="name">{prop.name}</h3>
}
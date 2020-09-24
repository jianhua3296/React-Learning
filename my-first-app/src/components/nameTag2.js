import React from 'react';


//we can treat prob as an object that takes info from the App.js and passed in to here
//this function takes prob from App.js, specifically, 
//<NameTag2 >Jian</NameTag2> is passed in, 
// anything in between <>Jian </> these opening and closing tags will be the prob.children. In this case, Jian

//notice, the paramenter name "prob" can be any name you define,
// this is how function declaration in javascript works, they are not data-type-specificed, 
// For example in Java (Int a, String b),
// equals to javscript (a, b). 
// see how these loosely bind declaration in javascript can lead to debugging hassles
export default (prob)=>{
    return <h3 className="name">{prob.children}</h3>
}
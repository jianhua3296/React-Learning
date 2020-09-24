import React from 'react';

//destructing props by using {}, props is passed in as an object, {placeholder, type} will only accept its variable named placeholder and type
export default function Input({placeholder, type}){
    return <input placeholder={placeholder} type={type}></input>
}
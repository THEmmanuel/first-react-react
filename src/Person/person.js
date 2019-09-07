import React from "react";
import "./person.css"

const Person = (props) => {
    return (

    <div className = "person" onClick = {props.clicked}> 
    <p onClick = {props.clicked}> Hey!!!! Whats up! I'm {props.name} and I'm {props.age} years old. and I love {props.children}</p>

    <input className = "input" type = "text" onChange = {props.changeName}/>
    </div>

    )
}

export default Person;
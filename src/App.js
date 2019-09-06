import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

const multiply = () => {
  const firstVariable = Math.floor(Math.random() * 30);
  const secondVariable = Math.floor(Math.random() * 30);

  let result = firstVariable * secondVariable;
  return (
    <div>
      <p>The multiplication of {firstVariable} and {secondVariable} is {result}.</p>
    </div>
  )
}


class App extends Component {

  state = {
    persons: [
      { name: "Sunny", age: 21, someWord: "Testing" },
      { name: "Maxwell", age: 17 },
      { name: "Alice", age: 24 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log("Hey, I was Clicked? Why.")
    this.setState({

      persons: [
        { name: newName, age: 21, someWord: "Testing, Or maybe not" },
        { name: "Maxwell", age: 17 },
        { name: "Alice", age: 18 }
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This should display a text.</p>
        <button className = "button" onClick={this.switchNameHandler.bind(this, "Ayodele")}>Click Me!!!</button>
        <Person name='Emmanuel' age='19'> and palying games, writing, reading and coding </Person>
        {multiply()}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          children={this.state.persons[0].someWord} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} 
          clicked = {() => this.switchNameHandler("Emmanuel Ayodele")}
          changeName = {this.switchNameHandler.bind(this, document.querySelector("input"))}
          //The syntax below is not recommended though, It can cause performance hits.
          //tHE HIGHLY RECOMMENDED way of doing this is by passing arguments into the bind()
          // This, of curse depends on the size of the application been built.
          />
      </div>
    );
  }
}



export default App;


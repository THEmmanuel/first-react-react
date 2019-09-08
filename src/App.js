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
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("Hey, I was Clicked? Why.")
    this.setState({

      persons: [
        { name: newName, age: 21, someWord: "Testing, Or maybe not" },
        { name: "Maxwell", age: 17 },
        { name: "Alice", age: 18 }
      ]
    })
  }

  changeNameHandler = (event) => {
    console.log("I was called")
    this.setState({
      persons: [
        { name: "Emmanuel", age: 21, someWord: "Testing, Or maybe not" },
        { name: event.target.value , age: 17 },
        { name: "Alice", age: 18 }
      ]
    })
  }

  toggleNameHandler = () => {
    const doesPersonsShow = this.state.showPersons;
    this.setState({showPersons: ! doesPersonsShow })
  }

  render() {
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name = {person.name}
            age = {person.age}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>Click the toggle button to show/hide persons list.</p>
        <button className = "button" onClick={this.toggleNameHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}



export default App;


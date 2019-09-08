import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

// const multiply = () => {
//   const firstVariable = Math.floor(Math.random() * 30);
//   const secondVariable = Math.floor(Math.random() * 30);

//   let result = firstVariable * secondVariable;
//   return (
//     <div>
//       <p>The multiplication of {firstVariable} and {secondVariable} is {result}.</p>
//     </div>
//   )
// }


class App extends Component {

  state = {
    persons: [
      { id : "266s7tsu", name: "Sunny", age: 21, someWord: "Testing" },
      { id : "459s0tsu", name: "Maxwell", age: 17 },
      { id : "885s6tsu", name: "Alice", age: 24 }
    ],
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log("I was called")

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]; 
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
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
          {this.state.persons.map((person, index) => {
            return <Person 
            name = {person.name}
            age = {person.age}
            clicked = {() => this.deletePersonHandler(index)}
            key = {person.id}
            changed = {(event) => this.changeNameHandler(event, person.id)}/>
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


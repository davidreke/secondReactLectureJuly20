// Below is the import for functional components
// import React from 'react';

// import for class components
import React, { Component } from 'react';
// import people from people
import People from './people.js';
import AddPerson from './addPerson';


class App extends Component{

  state = {
    listOfPeople: [
      {name: "kaiHhhA", age: 76, favoriteFood: "Chicken nuggets", id: 1},
      {name: "Austen", age:21, favoriteFood: "dirt", id: 2},
      {name: "DeeJay", age:28, favoriteFood: "West coast burrito eaters association", id: 3}
    ]
  }

  addPerson = (person) => {
    // console.log(person)

    person.id=Math.random();

    let newListOfPeople = [...this.state.listOfPeople, person];
    
    this.setState({
      listOfPeople: newListOfPeople
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Jamie eats dirt</h1>
        <p>Hi class! </p>
        {/* importing the people component into JSX */}
        {/* We pass data from one component do another with  props */}
        {/* We pass props by giving our components attributes */}
        <People arrayOfPeople={this.state.listOfPeople} />
        <AddPerson addMeBrah={this.addPerson}/>
      </div>
    )
  }
}

export default App;

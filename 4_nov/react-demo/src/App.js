import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
const FETCHURL = 'https://jsonplaceholder.typicode.com/users'
class App extends Component {
  state = {
    jsonData: null,

  }
  componentDidMount(){
    fetch(FETCHURL)
    .then(res => res.json())
    .then( users => this.setState({jsonData:users}))
    .catch(err => console.log(err))
  }
  render() {
    let persons = [
      {
          name: 'Oto',
          age: 22,
          id: 1,
          isActive: false,
      },
      {
          name: 'Grigoli',
          age: 20,
          id: 2,
          isActive: true,
      },
      {
          name: 'Mamuka',
          age: 20,
          id: 14,
          isActive: true,
      },
      {
          name: 'Salome',
          age: 17,
          id: 10,
          isActive: false,
      },


  ] 
  const showList = true;
    return (
      <div>
      <div className="App">
   {
     showList && (
       <div>
      <h2>Using Array.prototype.map()</h2>
      <ul>
       {persons.map( person => <li key={person.id}>{person.name} {person.age}</li>)}

      </ul>
      </div>
     ) 
   }
       <h2>Using Array.prototype.map()</h2>
       <ul>
        {persons
                .filter(person => person.isActive)
                .map(person => <li key={person.id}>{person.name} {person.age}</li>)
        
      }

       </ul>
       <h2>FETCHURL Data</h2>
       <ol>
         {this.state.jsonData === null ? null : this.state.jsonData.map(user => <li key={user.id}>{user.name}</li>)}
       </ol>


      </div>
      {this.state.jsonData === null ? null :  <User arr = {this.state.jsonData} />}
      </div>
    );
    }
}

export default App;

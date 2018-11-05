import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import{api as API} from './config/Api'
import Users from './components/Users'
const url = API.baseURl + API.users
class App extends Component {
  state = {
    data:null
  }
  componentDidMount(){
    fetch(url)
    .then( data=>data.json())
    .then(data =>  this.setState({data}))
  }
  render() {
    return (
      <div className="App">
      {
        (!!this.state.data && url.endsWith(API.photos) && <Photos data={this.state.data} length={5}/>)
      }
      {
        (!!this.state.data && url.endsWith(API.users) && <Users data={this.state.data} length={5}/>)
      }
      </div>
    );
  }
}

export default App;

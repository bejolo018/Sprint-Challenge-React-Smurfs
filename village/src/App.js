import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    Axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      this.setState({smurfs:res.data})
    })

    .catch(err =>{
      console.log(err);
    })
  }

  addNewSmurf = smurf => {
    Axios
    .post('http://localhost:3333/smurfs', smurf)
    .then( res => {
      this.setState({smurfs: res.data});
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <div className = 'home-link'>
            <NavLink to = '/'> Home </NavLink>
          </div>
          <div className = 'add-smurf-link'>
            <NavLink to ='smurf-form'> Add New Smurf</NavLink>
          </div>
        <Route
        exact path = '/smurf-form' 
        render = {props => <SmurfForm {...props} addNewSmurf ={this.addNewSmurf}/>}
        />
        <Route
        exact path = '/' 
        render = {props => <Smurfs smurfs = {this.state.smurfs}/>}
        />
      </div>
    );
  }
}

export default App;

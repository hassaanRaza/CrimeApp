import React, { Component } from 'react';
import './App.css';
import Crime from './screens/Crime';
import {getCategories, getForces, getCrimes} from './config/Api';

class App extends Component {

  bhejoCategory(){

  }
  render() {
    //console.log('hello world');
    //getCategories();
    //getForces();
    //getCrimes();
    return (
      <Crime category={getCategories} forces={getForces} crimes={getCrimes}/>
    );
  }
}

export default App;

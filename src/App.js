import React, {useState, useEffect, Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import './components/navbar.css'

import Navbar from './components/navbar'
import CardMen from './components/Cards'
import CardWomen from './components/CardsWomen'
import LandingPage from './components/LandingPage'
import { Button } from 'react-bootstrap';


class App extends Component {
  render(){
  return (
    <>
    <div className="App">
    <Router>
         
      <Navbar /> 
      
      <div className="browseTitle">
        Browse
      </div>
      
      <div className="Switch">
        <Switch>   
          <Route path="/cardMen" component={CardMen} />
          <Route path="/cardWomen" component={CardWomen} />
          <Route path="/" component={LandingPage}/>         
        </Switch>
      </div>

    </Router>
    </div>
    </>
  );
  }
}

export default App;

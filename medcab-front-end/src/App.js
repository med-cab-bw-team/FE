import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header'
import './App.css';
import styled from 'styled-components';
import {CarouselImg} from './components/carousel'
import SignUpForm from './components/SignUpForm'


const dummyComp = () => {
  console.log("stuff")
  return (
    <div>
      Stuff
    </div>
  )
}

function App() {

  return (
    <div className="App">
    
    <Header/>
    <CarouselImg/>
      <Switch> 
        {/* <h1> Giving you the 411 on your local 420 </h1> */}
        <PrivateRoute exact path="/home" component={dummyComp}/>
        <PrivateRoute exact path="/about" component={dummyComp}/>
        <Route  path="/signup" component={SignUpForm}/>
        <Route exact path="/login" component={dummyComp}/> 
      </Switch>
      {/* <footer>
        Stuff
      </footer> */}
    </div>
  );
}

export default App;

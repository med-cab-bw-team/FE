import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


import './App.css';

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
      <Switch> 
        <h1> Giving you the 411 on your local 420 </h1>
        <PrivateRoute exact path="/home" component={dummyComp}/>
        <PrivateRoute exact path="/about" component={dummyComp}/>
        <Route exact path="/signup" component={dummyComp}/>
        <Route exact path="/login" component={dummyComp}/> 
      </Switch>
    </div>
  );
}

export default App;

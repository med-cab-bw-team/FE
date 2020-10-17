import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import {Home} from './components/Home'
import {Footer} from './components/Footer'


const dummyComp = () => {
  console.log("stuff");
  return <div>Stuff</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <h1> Giving you the 411 on your local 420 </h1> */}
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/about" component={dummyComp} />
        <Route exact path="/signup" component={SignUpForm } />
        <Route exact path="/login" component={LoginForm } />
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;



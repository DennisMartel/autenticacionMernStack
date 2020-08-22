import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;

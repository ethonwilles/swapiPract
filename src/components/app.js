import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import APICaller from "./apicaller"
import Navigation from "./navigation"
import Luke from './pages/luke'
import Home from './pages/home'
export default class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <BrowserRouter>
      <div className='app'>
        <APICaller  />


        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/0" component={Luke}/>

        </Switch>
      </div>
       </BrowserRouter> 
    );
  }
}

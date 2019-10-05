import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import APICaller from "./apicaller"
import Navigation from "./navigation"
import C3PO from './c3po'
import Home from './home'
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
        <Route path="/1" component={C3PO}/>

        </Switch>
      </div>
       </BrowserRouter> 
    );
  }
}

import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

import APICaller from "./apicaller"
import Navigation from "./navigation"
import Luke from './pages/luke'
import Home from './pages/home'
import C3PO from "./pages/c3po"
import R2D2 from "./pages/r2-d2"
import DarthVader from './pages/darthVader'
import LeiaOrgana from './pages/leiaOrgana'
import OwenLars from './pages/owenlars'
import BeruLars from './pages/berulars'
import R5D4 from './pages/r5-d4'
import Biggs from './pages/biggs'
import ObiWan from './pages/obiwan'
export default class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <BrowserRouter>
      <div className='app'>
        <Link to='/'>Home</Link>
        


        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/0" component={Luke}/>
        <Route path='/1' component={C3PO}/>
        <Route path='/2' component={R2D2}/>
        <Route path='/3' component={DarthVader}/>
        <Route path='/4' component={LeiaOrgana}/>
        <Route path='/5' component={OwenLars}/>
        <Route path='/6' component={BeruLars}/>
        <Route path='/7' component={R5D4}/>
        <Route path='/8' component={Biggs}/>
        <Route path='/9' component={ObiWan}/>
        </Switch>
      </div>
       </BrowserRouter> 
    );
  }
}

import React, {Component} from 'react'
import axios from 'axios'
import APICaller from "../apicaller"
  export default class R2D2 extends Component{
    constructor(){
      super()
      this.state = {
        data: []
      }
    }
    componentDidMount(){
      axios 
      .get("https://swapi.co/api/people/3/")
      .then(res =>{

        this.setState({
          data: res.data
        })
        
      })
      .catch(err =>{
        console.log(err)
      })
        
    }

    render(){

      return(
        <div>
        <APICaller name='Luke Skywalker' />
        <div className="info-wrapper">
        <h1>{`Birth Year : ${this.state.data[`birth_year`]}`}</h1>
        <h1>{` Height : ${this.state.data[`height`]}`}</h1>
        <h1>{`Mass : ${this.state.data[`mass`]}`}</h1>
        <h1>{`Hair Color : ${this.state.data[`hair_color`]}`}</h1>
        <h1>{`Skin Color : ${this.state.data[`skin_color`]}`}</h1>
        <h1>{`Gender : ${this.state.data[`gender`]}`}</h1>
        
        </div>
        </div>
)
}
}
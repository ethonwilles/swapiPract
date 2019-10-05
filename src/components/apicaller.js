import React, {Component} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

import ApiItem from "./apicallerItem"
  export default class APICaller extends Component{
   constructor(){
       super()
       
       this.state= {
           data: []
       }
   }
   
    
    getApiData = () =>{
        axios
            .get('https://swapi.co/api/people/')
            .then(res =>{
                console.log(res.data.results)
                this.setState({
                    data: res.data.results
                })
                
            })
            .catch(err =>{
                console.log(err)
            })
    }
    handleRandId = () =>{
        for(let i = 0; i < this.state.data.length; i++){
            let rannum = Math.floor(Math.random() * this.state.data.length)
            return rannum
        }
    }
    portfolioItems = () => {
        
      return this.state.data.map(item => {
          
            let num = 0
            num += 1
            console.log(num)
        return <Link to={`/${this.handleRandId()}`}>{item.name}</Link>;
          
      });
    }
    componentDidMount(){
        this.getApiData()
    }
   
    render(){
        
         
      return(
        <div>
        
        {this.portfolioItems()}
        
        </div>
)
}
}
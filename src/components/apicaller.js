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
        let idTags = []
        for(let i = 0; i < 10; i++){
            
            
            idTags.push(i)
            
        }
        return idTags
    }
    portfolioItems = () => {
        let idTags = this.handleRandId()
        
      return this.state.data.map(item => {
          
        let id = idTags.shift()
        
         
        return <Link to={`/${id}`}>{item.name}</Link>;
          
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
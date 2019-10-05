import React, {Component} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

import ApiItem from "./apicallerItem"
  export default class APICaller extends Component{
   constructor(props){
       super()
       
       this.state= {
           data: [],
           
       }
       this.props = props;
   }
   
    
    getApiData = async () =>{
        
       await axios
        
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

    handleGetKeys = () =>{
        let objKeys = []
        return this.state.data.map(item => {
                      
             
            if (objKeys.length < 16){
                for(let i in Object.keys(item)[0]){
                    objKeys.push(Object.keys(item)[i])
                }
            }
            
              return objKeys
          });
          
          
    }
    componentDidMount(){
        this.getApiData()
    }
    
   
    render(){
        console.log(
            this.state.data[0]
            
        )
         
      return(
          
        <div>
        
        {this.portfolioItems()}
        <h1>{this.props.name}</h1>
        </div>
)
}
}
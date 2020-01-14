import React, { Component } from 'react'
import Data from './api/rc'
export default class structure extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:this.props.name ,
          head: 10 
        };
        this.hashmap = {};
        for(let el of Data){
            this.hashmap[el.rc_id] = el;
        }
        this.arr = []
        Data.map((name,index)=>{
            
            if(name.visibility===1 && name.rc_name === this.state.name)
            {
                // this.setState({temp:name})
                var temp;
                temp = name;
                
                this.arr.push(temp.rc_name);
                while(temp.parent_id !== 0){
                    // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                    temp = this.hashmap[temp.parent_id];
                    console.log(temp)
                    this.arr.push(temp.rc_name);
                }
                
                
            }
            else if(name.visibility === 0 && name.rc_head === this.state.head && name.rc_name === this.state.name){
                let temp;
                temp = name;
                this.arr.push(temp.rc_name);
                while(temp.parent_id !== 0){
                    // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                    temp = this.hashmap[temp.parent_id];
                    console.log(temp)
                    this.arr.push(temp.rc_name);
                }
            }
        }
        
    )
    } 
    
    
    
    render() {
        
    
    // const {state: { name }} = this;
        //console.log(all)
        return (
            <div>
                {/* <input type="text" onChange={(e) =>  { this.setState({name:e.target.value});}} />      */}
                    <ol>
                      {this.arr.slice(0).reverse().map(name => <button key={name}>{name}</button>)} 
                    </ol>   
            </div>
        )
    }
}

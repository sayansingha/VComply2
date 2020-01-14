import React, { Component } from 'react'
import Data from './api/rc'
export default class structure extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:this.props.name ,
          head: 9
          
        };
      }
    render() {
        let all = [];
        let arr = []
        Data.map(function(name){
        all.push({rc_id: name.rc_id,  rc_name: name.rc_name, rc_head: name.rc_head, visibility: name.visibility, parent_id: name.parent_id});
        })  
        {Data.map((name,index)=>{
            
            if(name.visibility===1 && name.rc_name === this.state.name)
            {
                // this.setState({temp:name})
                var temp;
                temp = name;
                
                arr.push(temp.rc_name);
                while(temp.parent_id !== 0){
                    // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                    temp = all[temp.parent_id-1];
                    console.log(temp)
                    arr.push(temp.rc_name);
                }
                console.log(arr);
                
            }
            else if(name.visibility === 0 && name.rc_head === this.state.head && name.rc_name === this.state.name){
                let temp;
                temp = name;
                arr.push(temp.rc_name);
                while(temp.parent_id !== 0){
                    // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                    temp = all[temp.parent_id-1];
                    console.log(temp)
                    arr.push(temp.rc_name);
                }
            }
        }
        
    )
    }
    
    // const {state: { name }} = this;
        //console.log(all)
        return (
            <div>
                {/* <input type="text" onChange={(e) =>  { this.setState({name:e.target.value});}} />      */}
                    <ol>
                      {arr.slice(0).reverse().map(name => <button key={name}>{name}</button>)} 
                    </ol>   
            </div>
        )
    }
}

import React, { Component } from 'react'
import Data from './api/rc'
export default class structure extends Component {
    componentDidMount(){
           
        
    }
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          head: 10
          
        };
      }
    
    render() {
        let all = [];
        let arr = []
        Data.map(function(name){
        all.push({rc_id: name.rc_id,  rc_name: name.rc_name, rc_head: name.rc_head, visibility: name.visibility, parent_id: name.parent_id});
        })  
        if(this.state.name === ""){
            console.log("abc")
            for(let i = 0;i < Data.length;i++){
                //console.log("abc")
                if(Data[i].visibility === 1 && Data[i].parent_id === 0){
                    // {return <li key={i}>{Data[i].rc_name}</li>}
                    arr.push(Data[i].rc_name);
                }
                // while(Data[i].child_id.length != 0){
                if(Data[i].visibility === 1 && Data[i].child_id.length === 0){
                    var temp;
                    temp = Data[i];
                    if(temp.rc_head === this.state.head){
                    arr.push(temp.rc_name);
                    while(temp.parent_id !== 0){
                        // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                        temp = all[temp.parent_id-1];
                        console.log(temp)
                        arr.push(temp.rc_name);
                    }}
                }
                if(Data[i].visibility === 1 && Data[i].child_id.length!== 0 && Data.parent_id !== 0){
                    var temp;
                    temp = Data[i];
                    if(temp.rc_head === this.state.head){
                    arr.push(temp.rc_name);
                    while(temp.parent_id !== 0){
                        // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                        temp = all[temp.parent_id-1];
                        console.log(temp)
                        arr.push(temp.rc_name);
                    }}
                }
            }
            // console.log(arr[0]);
            }       
        


        {Data.map((name,index)=>{
            
            if(name.visibility===1 && name.rc_name === this.state.name )
            {
                // this.setState({temp:name})
                if(name.parent_id === 0){
                arr.push(name.rc_name);
                if(name.child_id.length !== 0 ){
                    for(let i = 0;i < name.child_id.length;i++){
                        var temp;
                        temp = all[name.child_id[i]-1];
                        console.log(temp)
                        if(temp.rc_head === this.state.head)
                        {arr.push(temp.rc_name);
                        while(temp.parent_id !== 0 ){
                            // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                            temp = all[temp.parent_id-1];
                            console.log(temp)
                            if(temp.rc_head === this.state.head)
                            {arr.push(temp.rc_name);}
                        }}
                    }
                }}
                else if(name.parent_id !== 0){
                    if(name.child_id.length !== 0){
                        for(let i = 0;i < name.child_id.length;i++){
                            var temp;
                            temp = all[name.child_id[i]-1];
                            console.log(temp)
                            if(temp.rc_head === this.state.head){
                            arr.push(temp.rc_name);
                            while(temp.parent_id !== 0 ){
                                // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                                temp = all[temp.parent_id-1];
                                console.log(temp)
                                arr.push(temp.rc_name);
                            }}
                        }
                    }}

            }
            if(name.parent_id !== 0 && name.rc_name === this.state.name && name.visibility === 1){
                console.log("Jharkhand")
                var temp;
                temp = name;
                if(temp.rc_head === this.state.head){
                arr.push(temp.rc_name);
                while(temp.parent_id !== 0){
                    // {return <li key={index}>{all[temp.parent_id-1].rc_name}->{temp.rc_name}</li>}
                    temp = all[temp.parent_id-1];
                    console.log(temp)
                    arr.push(temp.rc_name);
                }}
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
           
        //console.log(all)
        return (
            <div>
                <input type="text" onChange={(e) =>  { this.setState({name:e.target.value});}} />     
                    <ol>
                      {arr.slice(0).reverse().map(name => <button key={name}>{name}</button>)}
                    </ol>   
            </div>
        )
    }
}

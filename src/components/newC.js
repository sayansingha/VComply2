import React, { Component } from 'react'
import Data from './api/rc'
import Check from './newC2'
export default class newC extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:"" ,
            emptyFlag: true
        };
        this.names = Data.map(name => name.rc_name)
        this.arr = [];
        this.obj = Data;
        this.obj.sort((a,b)=> a.parent_id - b.parent_id);
        this.hashmap = {};
        for(let eli of Data){
            for(let elj of Data){
                if(elj.parent_id === eli.rc_id){
                    eli.edges.push(elj.rc_id);
                }
            }
        }
        
        for(let el of Data){
            this.hashmap[el.rc_id] = el;
        }

    }
    // function 
    solution (query){
        this.arr.push(query);
        console.log(this.arr);
        let queryId = -1;
        let el;
        for(el of Data){
            
            if(el.rc_name === query){
                queryId = el.rc_id;
                break;
            }
        }
        for(let el of this.hashmap[queryId].edges){
            
            this.solution(this.hashmap[el].rc_name);
        }    
    }

    componentWillMount () {
        Data.map((name)=>{
            if(name.parent_id === 0){
                console.log("Will Mount->",name.rc_name);
                this.solution(name.rc_name)
            }
        })
        // this.solution("India")
    }

    render() {
        
        return (
            <div>
                <div>
                    <input type="text" onChange={(e) =>  {
                        const textValue = e.target.value
                        this.setState({name: textValue});
                        // if target.value is part of this.Name then call solution
                        this.arr.length = 0
                        if(this.names.indexOf(textValue) > -1){
                            this.solution(textValue);
                        }
                        else {
                            this.solution("India");
                        }
                    }} />  
                </div>
                <div>
                    {this.arr.map((name)=>{
                        console.log('button marker  --> ', name)
                        return <Check key={name} name={name}/>
                    })}
                    {/* {JSON.stringify(this.arr)} */}
                    {/* <Check name="M. G. Road"/> */}
                    
                </div>
            </div>
        )
    }
}

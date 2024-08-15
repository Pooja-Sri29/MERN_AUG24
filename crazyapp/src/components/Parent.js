import React, { Component } from "react";
import Child1 from "./Child";

export default class Father extends Component {
    render(){
        return(
            <div>
                <h1>Hi from parent</h1>
                <Child1></Child1>
            </div>
        );

    }
  
}
  
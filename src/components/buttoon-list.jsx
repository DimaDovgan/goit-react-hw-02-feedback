import React, { Component } from "react";
//  import {ButtonListItem} from "./button-listItem"
//import {ButtonElem} from "./button-elem"
export class ButtonList extends Component {
    constructor(props) {
        super(props);
        console.log("propsghjhjg.state", props.state.state )
          this.arr = props.state.state;
        // console.log(this.arr);
    }
    
    render() {
        
        return<ul>{this.arr.map(({ name, step }) => {
            return <li><button type="button" name={name} onClick={this.props.func}>{name}</button></li>
        })}</ul>
    } 
}
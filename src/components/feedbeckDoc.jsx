import React, { Component } from "react";
// import { ButtonList } from "./buttoon-list";
import { StatisyicList } from "./statistic-list"
import { ButtonList } from "./buttoon-list";
export class Feedback extends Component { 
    // constructor(props) {
    //     super(props);
        
    // }
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
    handl = (event) => {
        
        let name = event.target.name;
        this.setState((state, props) => (state[name]+=1));
        // this.setState((state, props) => ({state[name]:state[name]+1}));
        console.log("add")
        console.log(this.state)
        
  };

    render() {
        return <div>
            <h1>Please leave feedback</h1>
            <ButtonList state={this.props} func={this.handl}/>
            <h2>Statistics</h2>
            {Object.values(this.state).some((value) =>  value !== 0 )&&<div>
                <StatisyicList props={ this.state}/>
            </div>}
            
        </div>
    }
}
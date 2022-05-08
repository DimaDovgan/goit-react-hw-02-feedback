import React, { Component } from "react";

export class StatisyicList extends Component { 


    render() {
        let elems=Object.entries(this.props.props)
        // console.log(elems[0][0]);
        let total = elems.reduce((sum, current) => { return sum + current[1] }, 0)
        let positive = elems[0][1] / total * 100;
        console.log(elems[0][1])
        return <div>{elems.map(elem => {
            return <p>{elem[0]}:{elem[1]}</p>
        })} <p>total:{total}</p> <p>Positive feedback:{positive}%</p></div>
    }
}
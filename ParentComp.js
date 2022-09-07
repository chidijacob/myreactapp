import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "simplilearn"
        }
    }
    render() {
        console.log('Parent Component render')
        return ( 
        <div>
            i am the parent component
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>

        </div>
        )
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'simplilearn'
            })
        }, 3000);
    }
}

export default ParentComp
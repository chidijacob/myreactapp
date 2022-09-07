import React, { Component } from "react";

class RegComp extends Component{
    render() {
        console.log('Regular Component render')
        return (
            <div>
                i am the regular component {this.props.name}
            </div>
        )
    }
}
export default RegComp
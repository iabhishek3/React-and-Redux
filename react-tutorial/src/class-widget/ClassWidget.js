
import React, { Component, useState } from 'react';


class FunctionalWidget extends Component {
    constructor(props) {
        super(props);
        console.log("constructor!!");
    };
    state = {
        age: 18
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps!!");
        return state;
    };
    componentDidMount() {
        console.log("comonent did mount!!");
    };
    render() {
        return <div> Hi iam from class widget and Age is {this.state.age} and name is  {this.props.name}</div>
    };
}
export default FunctionalWidget;
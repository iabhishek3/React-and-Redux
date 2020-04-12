

import React, { Component, useState } from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        console.log("i am in constructor!!!");
        this.state = {
            name: props.name,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps" + JSON.stringify(props) + JSON.stringify(state));
        return state;
    }
    render() {
        return <div> Hi iam from class widget and  and name is  {this.state.name}</div>
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "no name" })
        }, 1000)
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("can return true or false depends on on use case,defualt it will return true");
        return true;
    }
    componentDidUpdate() {
        console.log("Component did update!!");
    }
}

export default User;
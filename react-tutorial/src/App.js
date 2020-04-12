import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './ui-components/Person';
import Person from './ui-components/Person';
import FunctionalWidget from './funtional-widget/FunctionalWidget';
import ClassWidget from './class-widget/ClassWidget';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const App = props => {
  
  const [currentstate, updatepersonAge] = useState({
    age: "90"
  })
  const stateChangeHandler = (e) => {
    console.log("click handler!!!");
    updatepersonAge({
      age: e.target.value
    })
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" onChange={stateChangeHandler} className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
        Hi Reatc World!!!!
      <button onClick={stateChangeHandler}> click mee</button>
      <h1> <Person age={currentstate.age} /> </h1>
      <FunctionalWidget></FunctionalWidget>
      <ClassWidget name="Abhi"></ClassWidget>
    </div>
  );
}



export default App;

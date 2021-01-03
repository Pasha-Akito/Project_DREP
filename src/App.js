import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewMusic } from './components/newMusic';
import { ListMusic } from './components/listMusic';
import { UpdateMusic } from './components/updateMusic';
import { Home } from './components/home';
import { Links } from './components/links';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/links">Directory</Nav.Link>
              <Nav.Link href="/newMusic">Create</Nav.Link>
              <Nav.Link href="/listMusic">Read</Nav.Link>
             
              
            </Nav>
          </Navbar>

          <br />
          <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/links' component={Links} exact />
            <Route path='/newMusic' component={NewMusic} exact />
            <Route path='/listMusic' component={ListMusic} exact />
            <Route path='/edit/:id' component={UpdateMusic}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

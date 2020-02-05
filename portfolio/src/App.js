import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Petros Shumie",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Finding Problems',
        subTitle: 'Creating Solutions',
        text: 'Projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Say Hello'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
        <NavbarBrand>Petros Shumie</NavbarBrand>

        <NavbarToggle aria-controls="navbar-toggle" />
        <NavbarCollapse id="navbar-toggle">
          <Nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </NavbarCollapse>
        </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;

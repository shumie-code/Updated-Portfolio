import React from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; 

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

        <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
        <NavbarCollapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          
          </Nav>
        </NavbarCollapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
        <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />
        <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="dark" expand="md" className="nav-bar">
    <img src='http://clipart-library.com/images_k/mountain-clipart-transparent-background/mountain-clipart-transparent-background-14.png' className="mountain-image" />
    <Navbar.Brand>
      Vispark
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { <span className="navbar-text mr-2">Welcome!</span>}
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

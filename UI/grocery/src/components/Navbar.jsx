import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../style/All.css'; // Import custom CSS file

function MyNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (mode) => {
    setDarkMode(mode);
    if (mode) {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  };

  return (
    <Navbar className={`custom-navbar`} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Grocery Booking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            {/* Divider for separation */}
            <div className="navbar-divider"></div>
            
            <NavDropdown title={<FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />} id="dark-mode-dropdown">
              <NavDropdown.Item onClick={() => toggleDarkMode(true)}>
                <FontAwesomeIcon icon={faSun} /> Light Mode
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => toggleDarkMode(false)}>
                <FontAwesomeIcon icon={faMoon} /> Dark Mode
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

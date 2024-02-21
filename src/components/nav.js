import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function NavbarPage() {
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand to="/">BE
            <img src="https://shorturl.at/bhlot"
                     width="50" height="50" 
                     alt="Logo" />PERFECT
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/features">Features</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
     
    </div>
  );
}

export default NavbarPage;

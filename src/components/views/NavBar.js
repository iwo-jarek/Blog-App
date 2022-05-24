import { Container, NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
    <Container>
      <Navbar.Brand href="/">Blog App</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
    </Nav>
    
    </Container>
    </Navbar>
    </>
  )
}

export default NavBar;
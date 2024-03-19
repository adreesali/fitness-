
import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBs className="shadow-sm mb-3 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-b-lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav>
          <Nav.Link to="/" as={NavLink} className="text-white">
            Home
          </Nav.Link>
          
          <Nav.Link to="/about" as={NavLink} className="text-white">
            About Us
          </Nav.Link> 
          <Nav.Link to="/training" as={NavLink} className="text-white">
            Training
          </Nav.Link>
           <Nav.Link to="/blogs" as={NavLink} className="text-white">
            Blogs
          </Nav.Link>
          <Nav.Link to="/articles" as={NavLink} className="text-white">
          Articles
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/signin" as={NavLink} className="text-white">
            <Button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none'>
              SignIn
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;

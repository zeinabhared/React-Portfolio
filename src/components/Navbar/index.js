import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar className='m-auto navbar navbar-expand-lg navbar-dark bg-primary'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'> 
            Zeinab Hared
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav className='ml-auto text-light fs-6'>
    
                  <Nav.Link as={Link} to='/'>
                    About Me
                  </Nav.Link>

                  <Nav.Link as={Link} to='/portfolio'>
                    Portfolio
                  </Nav.Link>

                <Nav.Link as={Link} to='/contact'>
                  Contact Me
                </Nav.Link>

                <Nav.Link as={Link} to='/resume'>
                 Resume
                </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
  );
};

export default AppNavbar;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header


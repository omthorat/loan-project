import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navagationbar() {
  
  
  return (
    <>
      <Navbar bg="light" variant="light">
        {/* <Container> */}
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className='navstyle'  ><HomeIcon/>&nbsp; <KeyboardArrowRightIcon/></Link></Nav.Link>
            <Nav.Link><Link to="/Ratelock" className='navstyle'  >RateLock&nbsp; <KeyboardArrowRightIcon/></Link></Nav.Link>
            <Nav.Link><Link to="/Waivers" className='navstyle' >Waivers</Link></Nav.Link>
        
          </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default Navagationbar;
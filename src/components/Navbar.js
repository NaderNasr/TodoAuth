import React from 'react'
import {Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOutButton from './Logout';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const {isAuthenticated} = useAuth0()
    
    return (
        <>
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand>
    <div style={{color: 'white'}}>
    Notes
    </div>
    </Navbar.Brand>
    <div>
    {!isAuthenticated ? (<LoginButton/>):(<LogOutButton/>)}
    </div>
  </Container>
  </Navbar>
</>
    )
}

export default NavBar

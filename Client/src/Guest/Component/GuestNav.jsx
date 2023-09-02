import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Link className='navbar-brand fw-bold'  to='/'>MOKINGO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Link to='/brands' className='nav-link px-4 ms-auto '>Brands</Link>
                        <Link to='/product' className='nav-link px-4 '>Product</Link>
                        <Link to='/category' className='nav-link px-4 '>Category</Link>
                    <Nav className="ms-auto">
                        <Link to='/loginn' className='nav-link shadow bg-danger text-light fw-bold px-3 rounded'>Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
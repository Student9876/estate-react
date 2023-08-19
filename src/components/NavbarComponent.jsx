import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <div id="navbarDiv">
            <Navbar bg='light' variant='light' expand='md'>
                <Container>
                    <Navbar.Brand href='/'>Estatery</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='justify-content-end' style={{ width: '100%' }}>
                            <NavLink href='/#rent'>Rent</NavLink>
                            <NavLink href='/#about'>Buy</NavLink>
                            <NavLink href='/#contactme'>Sell</NavLink>

                            {/* Navbar dropdowns  */}
                            <NavDropdown bg='dark' variant='dark' title='Manage Property' id='basic-nav-dropdown' disabled>
                                <Dropdown.Item>Liked Properties</Dropdown.Item>
                            </NavDropdown>
                            <NavDropdown bg='dark' variant='dark' title='Resources' id='basic-nav-dropdown' disabled>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}
export default NavbarComponent;
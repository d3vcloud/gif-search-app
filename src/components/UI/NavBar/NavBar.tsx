import { Link, NavLink } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap'

import ThemeSetter from '../ThemeSetter';

const NavBar = () => {
    
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Link className='navbar-brand' to='/'>GIFAPP</Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/favorites">Favoritos</NavLink>
                    </Nav>
                    <ThemeSetter />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

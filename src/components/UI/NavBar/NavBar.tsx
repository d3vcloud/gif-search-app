import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ThemeSetter from '../ThemeSetter';

const NavBar = () => {

    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Link className='navbar-brand' to='/'>GIFAPP</Link>
                {/* <Navbar.Brand href='/'>GIFAPP</Navbar.Brand> */}
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <ThemeSetter />
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default NavBar;

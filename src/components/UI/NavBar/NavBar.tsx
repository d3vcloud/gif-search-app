import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
//#303846 = creat-react-app
//#212529 = navbar - combo

import './NavBar.css';
import { useState } from "react";

const NavBar = () => {

    const [theme, setTheme] = useState(false);
    const handleChangeTheme = () => {
        setTheme(!theme);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">GIFAPP</Link>
                {/* <Navbar.Brand href="/">GIFAPP</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </Nav>
                    <button className={ `switch ${theme ? 'active' : ''}` } id="switch" onClick={handleChangeTheme}>
                        <span><FontAwesomeIcon icon={faSun} /></span>
                        <span><FontAwesomeIcon icon={faMoon} /></span>
                    </button>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default NavBar;

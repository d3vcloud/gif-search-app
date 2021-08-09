import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">GIFAPP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                        <NavLink exact className="nav-link" to="/search">Búsqueda</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default NavBar;

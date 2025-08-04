import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function CruiseShipsNavBar(props) {
    return <Navbar bg = "primary" variant = "dark" sticky = "top">
        <Container>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
            <Navbar.Brand as={Link} to="/">Cruise Ship Explorer</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/CarnivalShips">Carnival Cruise Line</Nav.Link>
                <Nav.Link as={Link} to="/NorwegianShips">Norwegian Cruise Line</Nav.Link>
                <Nav.Link as={Link} to="/RoyalShips">Royal Caribbean</Nav.Link>
                <Nav.Link as={Link} to="/FavoriteShips">Favorites</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
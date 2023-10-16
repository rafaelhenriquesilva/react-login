import { Nav, NavLink, Navbar, Navlink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 *  
 *      Navigationbar componentLet's understand some of the components and props from the above code:

        Navbar component wraps the entire component .
        expand prop allows us to collapse the navbar at given breakpoint and we also need to add collapseOnSelect prop .
        Navbar.Toggle and Navbar.Collapse helps to get the mobile friendly navbar .
        collapseOnSelect prop works only if we add eventKey prop for NavLink item .
 */

const Navigationbar = () => {
    return (
        <Navbar colapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey={1} as={Link} to="/">Home</NavLink>
                    <NavLink eventKey={2} as={Link} to="/about">About</NavLink>
                    <NavLink eventKey={3} as={Link} to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;
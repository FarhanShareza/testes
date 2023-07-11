import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { SiInstagram } from "react-icons/si";
import { logoTopcoat } from '../../../../assets';
import './header.scss'


const Header = () => {
    return (
        <>
            {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3 header-bg">
                <Container>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Brand className="navbar-brand d-lg-none" href="#">
                    <img className="logo-header" src={logoTopcoat}/>
                </Navbar.Brand>
                <NavLink to="/login" className="icon-header-media" id="my-instagram">
                    <SiInstagram />
                </NavLink>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Navbar.Brand className="navbar-brand d-lg-none" href="#">
                            <img className="logo-header" src="https://top-coating.com/wp-content/themes/tares-base/asset/images/main/header-logo-topcoat.png"/>
                        </Navbar.Brand></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1">
                        <Nav.Link href="#action1">ABOUT US</Nav.Link>
                        <Nav.Link href="#action1">PRODUCTS</Nav.Link>
                        <Navbar.Brand className="d-none d-lg-block" href="#">
                            <img className="logo-header" src="https://top-coating.com/wp-content/themes/tares-base/asset/images/main/header-logo-topcoat.png"/>
                        </Navbar.Brand>
                        <Nav.Link href="#action1">WORKSHOP</Nav.Link>
                        <Nav.Link href="#action1">WARRANTY</Nav.Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
            ))}
        </>
    );
}

export default Header

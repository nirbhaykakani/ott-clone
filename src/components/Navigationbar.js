import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Prime_Video from "../primevideo.png";

function Navigationbar(){
    return (
    <>
        <Container>
            <Navbar /*style={{ color: "white", backgroundColor: "gray" }} expand="lg"*/>
                <Navbar.Brand href="/">Prime Video</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Movies">Movies</Nav.Link>
                    <Nav.Link href="/Tvshows">TV Shows</Nav.Link>
                    <Nav.Link href="/Sports">Sports</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </>
  );
}

export default Navigationbar;
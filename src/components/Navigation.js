import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <div>
      <Navbar className="shadow-sm navbar navbar-dark fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-center fs-3 nav fw-bold fst-italic my-1">
            LIBRARY<span className="text-warning">IBIKOSGORO</span>.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="#home" className="me-3 active">
                Home
              </Nav.Link>
              <Nav.Link href="#contact" className="me-3">
                My Contact
              </Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown" align="end" className="me-3" menuVariant="dark">
                <NavDropdown.Item href="#sistem-informasi">Sistem Informasi</NavDropdown.Item>
                <NavDropdown.Item href="#akuntansi">Akuntansi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;

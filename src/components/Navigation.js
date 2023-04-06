import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <div>
      <Navbar className="shadow-sm navbar navbar-dark fixed-top" expand="lg">
        <Container>
          <Navbar.Brand className="text-center fs-3 nav fw-bold fst-italic my-1">
            LIBRARY<span className="text-warning">IBIKOSGORO</span>.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="#home" className="me-3 active">
                Home
              </Nav.Link>
              <NavDropdown title="Jurusan" id="basic-nav-dropdown" align="end" className="me-3" menuVariant="dark">
                <NavDropdown.Item href="#administrasi-bisnis">Administrasi Bisnis</NavDropdown.Item>
                <NavDropdown.Item href="#komunikasi">Komunikasi</NavDropdown.Item>
                <NavDropdown.Item href="#teknologi-informasi">Teknologi Informasi</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className="me-3">
                My Contact
              </Nav.Link>
              <Nav.Link href="#games" className="me-3">
                Games
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;

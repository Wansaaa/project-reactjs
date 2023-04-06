import { Container, Row, Col, Card } from 'react-bootstrap';
import gambar1 from '../assets/images/administrasi_bisnis/1.jpeg';
import gambar2 from '../assets/images/administrasi_bisnis/2.jpeg';
import gambar3 from '../assets/images/administrasi_bisnis/3.jpeg';

const AdministrasiBisnis = () => {
  return (
    <div>
      <Container className="pb-5" id="administrasi-bisnis">
        <Row>
          <Col className="text-center">
            <h1 className="text-white mt-5 ab">Administrasi Bisnis</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar1} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2">Pengantar Hukum Bisnis Indonesia</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 5 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar2} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2">Basics of Distribution Management</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 7 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar3} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2">Managing Change, Creativity, & Innovation</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 7 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdministrasiBisnis;

import { Container, Row, Col, Card } from 'react-bootstrap';
import test from '../assets/images/bg/calculator.jpg';

const SistemInformasi = () => {
  return (
    <div>
      <Container className="pb-5" id="sistem-informasi">
        <Row>
          <Col className="text-center">
            <h1 className="text-white mt-4 si">Sistem Informasi</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark">
                <Card.Img src={test} alt="Card image" />
                <Card.Title className="text-center fs-3 my-2">Card title</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark">
                <Card.Img src={test} alt="Card image" />
                <Card.Title className="text-center fs-3 my-2">Card title</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark">
                <Card.Img src={test} alt="Card image" />
                <Card.Title className="text-center fs-3 my-2">Card title</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark">
                <Card.Img src={test} alt="Card image" />
                <Card.Title className="text-center fs-3 my-2">Card title</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark">
                <Card.Img src={test} alt="Card image" />
                <Card.Title className="text-center fs-3 my-2">Card title</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SistemInformasi;

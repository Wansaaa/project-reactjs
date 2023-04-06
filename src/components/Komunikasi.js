import { Container, Row, Col, Card } from 'react-bootstrap';
import gambar1 from '../assets/images/komunikasi/1.jpeg';
import gambar2 from '../assets/images/komunikasi/2.jpeg';
import gambar3 from '../assets/images/komunikasi/3.jpeg';

const Komunikasi = () => {
  return (
    <div>
      <Container className="pb-5" id="komunikasi">
        <Row>
          <Col className="text-center">
            <h1 className="text-white mt-5 komunikasi">Komunikasi</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar1} alt="Pemodelan dan Simulasi Menggunakkan Spreadsheet" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-1">Pemodelan dan Simulasi Menggunakkan Spreadsheet</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar2} alt="Card image" className="Teknik Jitu Persuasi & Negoisasi" />
                <Card.Title className="text-center fs-3 my-2 mx-1">Teknik Jitu Persuasi & Negoisasi</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 3 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar3} alt="Card image" className="Dinamika Komunikasi" />
                <Card.Title className="text-center fs-3 my-2 mx-1">Dinamika Komunikasi</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 6 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Komunikasi;

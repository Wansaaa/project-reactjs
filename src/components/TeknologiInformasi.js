import { Container, Row, Col, Card } from 'react-bootstrap';
import gambar1 from '../assets/images/teknologi_informasi/1.jpeg';
import gambar2 from '../assets/images/teknologi_informasi/2.jpeg';
import gambar3 from '../assets/images/teknologi_informasi/3.jpeg';
import gambar4 from '../assets/images/teknologi_informasi/4.jpeg';
import gambar5 from '../assets/images/teknologi_informasi/5.jpeg';
import gambar6 from '../assets/images/teknologi_informasi/6.jpeg';

const TeknologiInformasi = () => {
  return (
    <div>
      <Container className="pb-5" id="teknologi-informasi">
        <Row>
          <Col className="text-center">
            <h1 className="text-white mt-5 ti">Teknologi Informasi</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar1} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-1 text-uppercase">Pysical Security</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 1 mints ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar2} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-0 text-uppercase">Konsep dan Strategi Keamanan Informasi Di Dunia CYBER</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 2 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar3} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-1 text-uppercase">Teknologi Informasi</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 2 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar4} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 text-uppercase mx-1">Keamanan Multimedia</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 4 days ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-white p-1">
              <div className="bg-dark card">
                <Card.Img src={gambar5} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-1">langkah cerdas mengamankan dan menyelamatkan data pada HARD DISK</Card.Title>
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
                <Card.Img src={gambar6} alt="Card image" className="card-img" />
                <Card.Title className="text-center fs-3 my-2 mx-1 text-uppercase">inthernet forensics</Card.Title>
                <Card.Body>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                  <Card.Text>Last updated 1 months ago</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeknologiInformasi;

import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="d-flex justify-content-end align-items-end h-50">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <h1 className="title">
              READING IS<br></br>THE BEST TEACHER
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

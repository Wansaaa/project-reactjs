import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="d-flex justify-content-end align-items-center h-100">
      <Container className="text-white d-flex justify-content-end text-end">
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

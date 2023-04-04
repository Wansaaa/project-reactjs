import { Container, Row, Col, Card } from 'react-bootstrap';
import FlapppyBird from '../assets/images/games/flappy-bird.png';
import TicTacToe from '../assets/images/games/tic-tac-toe.png';
import Calculator from '../assets/images/games/calculator.png';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Games = () => {
  return (
    <div>
      <Container className="pb-5" id="games">
        <Row>
          <Col className="text-center">
            <h1 className="text-white mt-4 games">My Games</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4 link-games">
            <a href="https://flappybird-green.vercel.app/">
              <Card className="text-white p-1 card-games">
                <div className="bg-dark card">
                  <Card.Img src={FlapppyBird} alt="Flappy Bird" />
                  <Card.Title className="text-center fs-3 my-2">Flappy Bird</Card.Title>
                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore.</Card.Text>
                    <Card.Text>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <BsStarHalf />
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </a>
          </Col>
          <Col md={4} className="mb-4 link-games">
            <a href="https://tictictoe-reactjs.vercel.app/">
              <Card className="text-white p-1">
                <div className="bg-dark card">
                  <Card.Img src={TicTacToe} alt="Tic Tac Toe" className="card-games" />
                  <Card.Title className="text-center fs-3 my-2">Tic Tac Toe</Card.Title>
                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum dolorum adipisci, at tempora iure!</Card.Text>
                    <Card.Text>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </a>
          </Col>
          <Col md={4} className="mb-4 link-games">
            <a href="">
              <Card className="text-white p-1">
                <div className="bg-dark card">
                  <Card.Img src={Calculator} alt="Calculator" className="card-games" />
                  <Card.Title className="text-center fs-3 my-2">Calculator</Card.Title>
                  <Card.Body>
                    <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quisquam est.</Card.Text>
                    <Card.Text>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Games;

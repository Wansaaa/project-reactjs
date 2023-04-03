import { Container, Row, Col } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div>
      <Container className="pb-5 w-100" id="contact">
        <Row className="text-center">
          <Col className="text-center">
            <h1 className="text-white mt-4 contact">Contact Us</h1>
            <hr className="hr"></hr>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col md={7} className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4618287118537!2d106.83086741482015!3d-6.334168595416071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f28324b8d573%3A0x64d2165a56a878dc!2sThe%20Institute%20of%20Business%20%26%20Information%20Kosgoro%201957!5e0!3m2!1sen!2sid!4v1680543257912!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md={5} className="text-white my-3">
            <form>
              <div className="mb-3">
                <label for="npm" className="form-label text-uppercase label">
                  <span className="d-flex align-items-center">
                    <BsFillPersonVcardFill />
                    NPM
                  </span>
                </label>
                <input type="text" className="form-control" id="npm" aria-describedby="npm" placeholder="masukkan npm" />
              </div>
              <div className="mb-3">
                <label for="name" className="form-label text-uppercase label">
                  <span className="d-flex align-items-center">
                    <FaRegUser />
                    Nama Lengkap
                  </span>
                </label>
                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="masukkan nama" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label text-uppercase label">
                  <span className="d-flex align-items-center">
                    <AiOutlineMail />
                    Email
                  </span>
                </label>
                <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="masukkan email" />
              </div>
              <div className="mb-3">
                <label for="pesan" className="form-label label text-uppercase">
                  <span className="d-flex align-items-center">
                    <BiMessageDetail />
                    Pesan
                  </span>
                </label>
                <textarea className="form-control" id="pesan" rows="5" placeholder="masukkan pesan"></textarea>
              </div>
              <button type="submit" className="fs-5 tombol">
                Kirim!
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

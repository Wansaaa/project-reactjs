import { Container } from 'react-bootstrap';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="footer-top ">
          <a href="https://www.instagram.com/Ichwan_sanusi/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/Ichwan_Sanusii" target="_blank">
            <FiTwitter />
          </a>
          <a href="https://github.com/Wansaaa" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="footer-bottom">
          <p className="text-white mt-2 fs-5">
            Created by <AiOutlineCopyrightCircle />
            <a href="#" className="text-white text-primary fst-italic cipta">
              ibi kosgoro
            </a>{' '}
            2023.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

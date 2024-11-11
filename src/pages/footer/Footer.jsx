import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a href="https://www.facebook.com/share/15FBTviYCa/?mibextid=qi2Omg" target="_blank" rel="facebook">
            <FaFacebook className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com/in/sisara-dilhari/" target="_blank" rel="linkedin">
            <FaLinkedin className="footer__icon" />
          </a>
          <a href="https://github.com/Sisara98" target="_blank" rel="Github">
            <FaGithub className="footer__icon" />
          </a>
        </div>
        
        <ul className="footer__links">
          <li><Link to="/">Home</Link></li> /
          <li><Link to="/about">About</Link></li> /
          <li><Link to="/project">Project</Link></li> /
          <li><Link to="/archived">Archived</Link></li> /
          <li><Link to="/contact">Contact</Link></li>
        </ul>


        <p className="footer__text">
          Sisara Dilhari <span className="footer__heart">♥</span> Portfolio
        </p>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Sisara Portfolio | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

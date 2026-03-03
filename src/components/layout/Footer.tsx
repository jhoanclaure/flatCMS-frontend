import "./Footer.css";
import { FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <a href="#">Legal Warning</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Quality Policy</a>
        </div>

        <div className="footer-center">
          <h2 className="footer-logo">News</h2>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>

            <a href="https://es.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </a>

            <a href="https://bo.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <a href="#">News</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </div>
      </div>

      <div className="footer-bottom">
        Tarrago Brands International | Narcís Monturiol, 18 (Pl. Bufalvent)
        08243 MANRESA (Cochabamba) Bolivia |
        info@tarrago.com | +591 93 877 08 14
      </div>
    </footer>
  );
};

export default Footer;
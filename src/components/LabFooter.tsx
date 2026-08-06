import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function LabFooter() {
  return (
    <footer className="lab-footer-section" id="contact">
      <div className="footer-compact-row">
        <div className="footer-left-info">
          <div className="availability-tag">
            <span className="avail-dot">●</span>
            Available for work — {new Date().getFullYear()}
          </div>
          <span className="footer-dot-divider">•</span>
          <div className="footer-copyright">© Shirisha C</div>
        </div>

        <div className="footer-social-icons">
          <a
            href="https://www.linkedin.com/in/shirisha-c"
            target="_blank"
            rel="noopener noreferrer"
            className="social-square-btn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={13} />
          </a>
          <a
            href="https://www.instagram.com/shiri.codes/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-square-btn"
            title="Instagram"
          >
            <FaInstagram size={13} />
          </a>
          <a
            href="mailto:shirisha@example.com"
            className="social-square-btn"
            title="Email"
          >
            <FaEnvelope size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

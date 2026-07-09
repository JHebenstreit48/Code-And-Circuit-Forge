import { Link } from "react-router-dom";
import "@/SCSS/HeaderNavAndFooter/Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__copy">
            © {year} <span className="footer__name">Justin Hebenstreit</span>
          </p>
          <p className="footer__tag">
            React · TypeScript · Clean architecture · Data-driven UX
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/qrcode">Digital Card</Link>
        </nav>
        
        <div className="footer__social">
          <a
            className="icon-btn"
            href="https://github.com/JHebenstreit48"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>

          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/justin-hebenstreit-6ba22920/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="icon-btn icon-btn--text"
            href="#top"
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
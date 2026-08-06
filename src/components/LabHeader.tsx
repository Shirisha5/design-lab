import { Link } from "react-router-dom";

export default function LabHeader() {
  return (
    <header className="lab-header">
      <div className="lab-logo-left anim-header-item">
        <Link to="/" className="logo-brand-link">
          <span className="logo-square-icon">■</span>
          <span className="logo-brand-name">SC_</span>
        </Link>
      </div>

      <nav className="lab-nav-links">
        <div className="anim-header-item-text">DESIGN LAB</div>
      </nav>
    </header>
  );
}

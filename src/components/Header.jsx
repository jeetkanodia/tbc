import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navbar-links">
        <div className="navbar-link">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </div>
        <div className="navbar-link">
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
        <div className="navbar-link">
          <Link className="navbar-link" to="/work">
            Work
          </Link>
        </div>
        <div className="navbar-link">
          <Link className="navbar-link" to="/services">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

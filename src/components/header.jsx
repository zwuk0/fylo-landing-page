import { ReactComponent as Logo } from "../images/logo.svg";
import "../scss/style.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="head">
      <nav className="navbar">
        <Logo />
        <div className="nav-links">
          <NavLink to="/about">Features</NavLink>
          <NavLink to="/about"> Team</NavLink>
          <NavLink to="/about"> SingIn</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import SvgLogo from "../images/svgs/Logo";

import "../scss/style.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="head">
      <nav className="navbar">
        <SvgLogo style={{ height: 24 + "px", width: 100 + "px" }} />
        <div>
          <NavLink className="nav-links" to="/features">
            Features
          </NavLink>

          <NavLink className="nav-links" to="/team">
            Team
          </NavLink>

          <NavLink className="nav-links" to="/Sing In">
            Sing In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

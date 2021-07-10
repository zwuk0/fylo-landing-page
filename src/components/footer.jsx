import "../scss/_footer.scss";
import SvgLogo from "../images/svgs/Logo";
import SvgIconPhone from "../images/svgs/IconPhone";
import SvgIconEmail from "../images/svgs/IconEmail";
import SvgFacebook from "../images/svgs/Facebook";
import SvgInstagram from "../images/svgs/Instagram";
import SvgTwitter from "../images/svgs/Twitter";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="foo-logo-wrap">
        <SvgLogo
          style={{ width: 140 + "px", height: 40 + "px" }}
          fill={"#FFF"}
          viewBox={"55 0 50 50"}
        />
      </div>
      <div className="footer-wrap2">
        <div className="foo-contact">
          <div className="foo-phone">
            <SvgIconPhone className="foo-icons-contact" />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="foo-email">
            <SvgIconEmail className="foo-icons-contact" />
            <p>example#fylo.com</p>
          </div>
        </div>
        <div className="foo-links-parent"></div>
        <div className="foo-links-wrap">
          <NavLink className="foo-links" to="/About Us">
            About Us
          </NavLink>
          <NavLink className="foo-links" to="/About Us">
            Jobs
          </NavLink>
          <NavLink className="foo-links" to="/About Us">
            Press
          </NavLink>
          <NavLink className="foo-links" to="/About Us">
            Blog
          </NavLink>
        </div>
        <div className="foo-links-wrap">
          <NavLink className="foo-links" to="/About Us">
            Contact us
          </NavLink>
          <NavLink className="foo-links" to="/About Us">
            Terms
          </NavLink>
          <NavLink className="foo-links" to="/About Us">
            Press
          </NavLink>
        </div>
        <div className="foo-icons-wrap">
          <div className="foo-icons-social">
            <SvgFacebook style={{ width: 20 + "px", height: 20 + "px" }} />
          </div>
          <div className="foo-icons-social">
            <SvgInstagram style={{ width: 20 + "px", height: 20 + "px" }} />
          </div>
          <div className="foo-icons-social">
            <SvgTwitter style={{ width: 20 + "px", height: 20 + "px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

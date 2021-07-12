import { NavLink } from "react-router-dom";
import SvgIconArrow from "../images/svgs/IconArrow";
import SvgIllustration2 from "../images/svgs/Illustration2";
import avatar from "../images/avatarTestimonial.jpg";
import "../scss/style.scss";

function Productive() {
  return (
    <div className="prod-cont">
      <SvgIllustration2 className="svg-illus2" />
      <div className="pt-wrap">
        <div className="prod-text">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs.
          </p>
          <p>
            Securly share files and folders with fiends, family and colleagues
            for live collaboration. No email attachements required!
          </p>
          <NavLink className="prod-link" to="/seehow">
            <p>
              See how Fylo works <SvgIconArrow className="pl-svg-arrow" />
            </p>
          </NavLink>
        </div>
        <div className="prod-card">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making th switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="pc-profile">
            <img src={avatar} alt="avatarTestimonial" />
            <div className="pc-p-name">
              <h3>Kyle Burton</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productive;

import "../scss/style.scss";
import SvgIllustration1 from "../images/svgs/Illustration1";
function Hero1() {
  return (
    <div className="he-cont-1">
      <div className="he-1-box">
        <SvgIllustration1 className="svg-illus-1" />
      </div>
      <div className="he-1-box">
        <div className="he-1-text-form">
          <div className="he-1-text">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores your most important files in one secure location.
              Acess them wherever you need, share and colaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <form action="#" className="he-1-form">
            <input
              type="text"
              placeholder="Enter your email"
              className="he-1-input"
            />
            <button className="he-1-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero1;

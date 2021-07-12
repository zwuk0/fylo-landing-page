import "../scss/style.scss";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-text">
        <h3>Get early acess today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremly generous. If you have any questions our support team would be
          happy to halp you.
        </p>
      </div>
      <div className="signup-form">
        <input type="text" placeholder="email@example.com" />
        <button className="signup-btn">Get Started For Free</button>
      </div>
    </div>
  );
}

export default Signup;

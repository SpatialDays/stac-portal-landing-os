import Logo from "../../assets/images/logo.svg";
import "./style.scss";

const Heading = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="heading-container">
      <div className="container">
        <div className="heading">
          <div className="heading__logo" onClick={handleClick}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="heading__login">
            <h3 className="heading__login__title">Log In</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;

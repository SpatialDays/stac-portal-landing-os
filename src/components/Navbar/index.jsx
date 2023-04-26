import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="container">
        <div className="navbar">
          <ul className="links">
            <li className="link">Shop</li>
            <li className="link">Business and Government</li>
            <li className="link">Education</li>
          </ul>
          <div className="navbar__login">
            <button className="btn btn--secondary">Log in</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

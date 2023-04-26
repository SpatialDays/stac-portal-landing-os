import config from "../../site-config.json";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="container">
        <div className="navbar">
          <ul className="links">
            {config.navbar.links.map((link) => (
              <li key={link} className="link">
                {link.text}
              </li>
            ))}
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

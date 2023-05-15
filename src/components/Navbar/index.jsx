import config from "../../site-config.json";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="container">
        <div className="navbar">
          <ul className="links">
            {config.navbar.links.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="link-container"
                onClick={(e) => {
                  e.preventDefault();
                  if (link.openInNewTab) {
                    window.open(link.url, "_blank");
                  } else {
                    window.location = link.url;
                  }
                }}
              >
                <li className="link">{link.text}</li>
              </a>
            ))}
          </ul>
          <div className="navbar__login">
            <button
              className="btn btn--secondary"
              onClick={() => (window.location.href = config.identity.login)}
            >
              Log in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

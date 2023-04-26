import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="links">
          <li className="link">Shop</li>
          <li className="link">Business and Government</li>
          <li className="link">Education</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

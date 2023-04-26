import config from "../../site-config.json";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__logo">
        <img src={config.logo.src} alt="Logo" />
      </div>
      <div className="footer__info">
        <div className="footer__links">
          {config.footer.links.map((link) => (
            <a key={link} href={link.url}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="footer__address">
          {config.footer.address.map((address) => (
            <p key={address}>{address}</p>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          © {config.identity.name}
          {new Date().getFullYear() !== 2021 && ` ${new Date().getFullYear()}`}
        </p>
        <p>
          Powered by{" "}
          <a target="_blank" href="https://spatialdays.com/" rel="noreferrer">
            Spatial Days Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

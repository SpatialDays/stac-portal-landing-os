import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer__info">
        <div className="footer__links">
          <a href="#">Privacy policy</a>
          <a href="#">Cookies</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Accessibility</a>
        </div>
        <div className="footer__address">
          <p>Ordnance Survey Limited</p>
          <p>Explorer House, Adanac Drive</p>
          <p>Nursling, Southampton</p>
          <p>SO16 0AS</p>
          <p>Registration No: 09121572</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© Ordnance Survey 2023</p>
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

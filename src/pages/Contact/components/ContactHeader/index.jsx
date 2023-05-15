import config from "../../../../site-config.json";
import "./style.scss";

const ContactHeader = () => {
  return (
    <div className="contact-header-container">
      <div className="container">
        <h1 className="contact-heading">{config.contact.heading}</h1>
        <p>{config.contact.subheading}</p>
      </div>
    </div>
  );
};

export default ContactHeader;

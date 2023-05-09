import ContactHeader from "./components/ContactHeader";
import ContactDetailsCard from "./components/ContactDetailsCard";
import ContactImage from "./components/ContactImage";
import config from "../../site-config.json";
import "./style.scss";

const Contact = () => {
  return (
    <div className="contact-page-content">
      <ContactHeader />

      <div className="content-container">
        <div className="card-container">
            {config.contact['contact-details-cards'].map((card) => (
              <ContactDetailsCard key={card.id} {...card} />
            ))}
        </div>

        <div className="image-container">
          <ContactImage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
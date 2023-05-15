import PropTypes from "prop-types";
import "./style.scss";

const ContactDetailsCard = ({ name, company, role, telephone, email }) => {
  return (
    <div className="details-card">
      <div className="details-card__content">
        <p className="details-card__name">
          <span>Name:</span> {name}
        </p>
        <p className="details-card__company">
          <span>Company:</span> {company}
        </p>
        <p className="details-card__role">
          <span>Role:</span> {role}
        </p>
        <p className="details-card__telephone">
          <span>Tel:</span> {telephone}
        </p>
        <p className="details-card__email">
          <span>Email:</span> <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};

ContactDetailsCard.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactDetailsCard;

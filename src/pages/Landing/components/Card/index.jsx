import PropTypes from "prop-types";
import "./style.scss";

const Card = ({ title, description, image, button }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <button className="card__button">{button}</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Card;

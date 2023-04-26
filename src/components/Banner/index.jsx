import config from "../../site-config.json";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">{config.hero.heading}</h1>
        <p className="banner__description">{config.hero.subheading}</p>
        <div className="banner__btn">
          <button className="btn btn--primary">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

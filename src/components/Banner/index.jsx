import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">See the world in a new light</h1>
        <p className="banner__description">
          At OS, we use location data and intelligence to illuminate the unseen.
        </p>
        <div className="banner__btn">
          <button className="btn btn--primary">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Hero from "../../components/Hero";
import Banner from "../../../../components/Banner";

import "./style.scss";

const ResponsiveHero = () => {
  return (
    <div className="responsive-hero-container">
      <div className="container">
        <div className="responsive-hero">
          <Banner />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;

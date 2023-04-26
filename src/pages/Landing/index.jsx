import Hero from "./components/Hero";
import Banner from "../../components/Banner";

import "./style.scss";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Banner />

      <div className="text-block">
        <div className="text-block__content">
          <h2>
            We help governments make smarter decisions that ensure our safety
            and security, we show businesses how to gain a location data edge
            and we help everyone experience the benefits of the world outside{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;

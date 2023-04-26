import ResponsiveHero from "./components/ResponsiveHero";
import Card from "./components/Card";
import config from "../../site-config.json";
import "./style.scss";

const Landing = () => {
  return (
    <div>
      <ResponsiveHero />

      <div className="container">
        <div className="text-block">
          <div className="text-block__content">
            <h2>{config.block}</h2>
          </div>
        </div>

        <div className="card-block">
          {config.cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;

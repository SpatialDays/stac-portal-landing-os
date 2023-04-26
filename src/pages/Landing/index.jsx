import ResponsiveHero from "./components/ResponsiveHero";
import Card from "./components/Card";

import "./style.scss";

const cards = [
  {
    id: 1,
    title: "Location Intelligence",
    description:
      "We help governments make smarter decisions that ensure our safety and security, we show businesses how to gain a location data edge and we help everyone experience the benefits of the world outside",
    image: "/images/card-1.webp",
    button: "Learn More",
  },
  {
    id: 2,
    title: "OS data products",
    description:
      "Locate OS geospatial data download products, API products, and geospatial services, and find out how they can benefit your organisation. Our open data and premium data works in a range of mapping software.",
    image: "/images/card-2.jpg",
    button: "Discover OS data",
  },
];

const Landing = () => {
  return (
    <div>
      <ResponsiveHero />

      <div className="container">
        <div className="text-block">
          <div className="text-block__content">
            <h2>
              We help governments make smarter decisions that ensure our safety
              and security, we show businesses how to gain a location data edge
              and we help everyone experience the benefits of the world outside{" "}
            </h2>
          </div>
        </div>

        <div className="card-block">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;

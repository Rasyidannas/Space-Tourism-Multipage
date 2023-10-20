import Subtitle from "./Subtitle";
import "./DestinationItem.css";
import { useState } from "react";

function DestinationItem({ destinations }) {
  console.log(destinations);

  const [show, setShow] = useState(0);

  const destinationActive = destinations[show];

  return (
    <main className="destination">
      <section>
        <Subtitle number="01" text="PICK YOUR DESTINATION" />
        <div className="destination-content">
          <div className="destination-content__image">
            <img src={destinationActive.images.png} />
          </div>
          <div className="destination-content__text">
            <ul className="destination-nav">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a
                    className={
                      show === index
                        ? "nav-link--small active nav-text"
                        : "nav-link--small nav-text"
                    }
                    onClick={() => setShow(index)}
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>

            <h2>{destinationActive.name}</h2>
            <p>{destinationActive.description}</p>
            <div className="line"></div>
            <div className="destination-content__desc">
              <div>
                <p className="sub-heading2">AVG. DISTANCE</p>
                <p className="sub-heading1">{destinationActive.distance}</p>
              </div>
              <div>
                <p className="sub-heading2">EST. TRAVEL TIME</p>
                <p className="sub-heading1">{destinationActive.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DestinationItem;

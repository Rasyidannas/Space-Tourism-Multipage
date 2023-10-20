import { useState } from "react";
import Subtitle from "./Subtitle";
import "./CrewItem.css";

function CrewItem({ crew }) {
  const [show, setShow] = useState(0);

  const crewActive = crew[show];

  return (
    <main className="crews">
      <section>
        <Subtitle number="02" text="MEET YOUR CREW" />
        <div className="crews-content">
          <div className="crews-content__image">
            <img src={crewActive.images.png} />
          </div>

          <div className="crews-content__text">
            <div className="crews-content__profile">
              <h4>{crewActive.role}</h4>
              <h3>{crewActive.name}</h3>
            </div>
            <p>{crewActive.bio}</p>
            <ul className="crews-nav">
              {crew.map((crew, index) => (
                <li key={index}>
                  <a
                    className={show === index ? "active" : ""}
                    onClick={() => setShow(index)}
                  ></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CrewItem;

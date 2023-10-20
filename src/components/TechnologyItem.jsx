import { useState } from "react";
import Subtitle from "./Subtitle";
import "./TechnologyItem.css";

function TechnologyItem({ technology }) {
  const [show, setShow] = useState(0);

  const technologyActive = technology[show];

  return (
    <main className="technology">
      <section>
        <Subtitle number="03" text="SPACE LAUNCH 101" />
        <div className="technology-content">
          <div className="technology-content__wrapper">
            <div className="technology-nav">
              {technology.map((item, index) => (
                <a
                  key={index}
                  className={show === index ? "active" : ""}
                  onClick={() => setShow(index)}
                >
                  <h4>{index + 1}</h4>
                </a>
              ))}
            </div>

            <div className="technology-content__info">
              <p className="nav-text">THE TERMINOLOGY...</p>
              <h3>{technologyActive.name}</h3>
              <p>{technologyActive.description}</p>
            </div>
          </div>

          <div className="technology-content__image potrait">
            <img src={technologyActive.images.portrait} />
          </div>

          <div className="technology-content__image landscape">
            <img src={technologyActive.images.landscape} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechnologyItem;

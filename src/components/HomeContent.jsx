import { Link } from "react-router-dom";
import "./HomeContent.css";

function HomeContent() {
  return (
    <main className="home">
      <section className="home__section">
        <div className="home__text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="destinations" className="home__btn">
          <h4>EXPLORE</h4>
        </Link>

        {/* Background Image */}
        <div className="home__bg"></div>
      </section>
    </main>
  );
}

export default HomeContent;

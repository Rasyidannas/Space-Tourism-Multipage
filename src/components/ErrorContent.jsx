import { Link } from "react-router-dom";
import Button from "./Button";
import "./ErrorContent.css";

function ErrorContent({ message }) {
  return (
    <main className="error">
      <div className="error__bg">
        <img className="error--desktop" src="/404/background-404-desktop.jpg" />
        <img className="error--tablet" src="/404/background-404-tablet.png" />
        <img className="error--mobile" src="/404/background-404-mobile.png" />
      </div>
      <section className="error__section">
      <h1 className="error__title">404</h1>
        <h3 className="error__text">{message}</h3>
        {/* <Button href="/" className="error__btn nav-text">Back To Space</Button> */}
        <Link to="/" className="error__btn nav-text">
          <span>Back To Space</span>
        </Link>
      </section>
    </main>
  );
}

export default ErrorContent;

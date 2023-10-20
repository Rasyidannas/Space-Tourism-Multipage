import { Link, NavLink } from "react-router-dom";
import Logo from "./Icons/Logo";
import HamburgerMenu from "./Icons/HamburgerMenu";
import Close from "./Icons/Close";
import Button from "./Button";
import "./MainNavigation.css";
import { useState } from "react";

function MainNavigation() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <nav className="main-nav">
        <div className="line"></div>
        <Link className="main-nav__logo" to="/">
          <Logo />
        </Link>
        {/* Desktop Menu */}
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active nav-text" : "nav-link nav-text"
              }
            >
              <span>00</span> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive ? "nav-link active nav-text" : "nav-link nav-text"
              }
            >
              <span>01</span> Destinations
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/crews"
              className={({ isActive }) =>
                isActive ? "nav-link active nav-text" : "nav-link nav-text"
              }
            >
              <span>02</span> Crews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? "nav-link active nav-text" : "nav-link nav-text"
              }
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu */}
        <Button
          className="hamburger-menu"
          onClick={() => {
            setMenuActive(true);
          }}
        >
          <span>
            <HamburgerMenu />
          </span>
        </Button>
        <ul
          className="mobile-list"
          style={menuActive ? { display: "block" } : { display: "none" }}
        >
          <Button
            className="close-menu"
            onClick={() => {
              setMenuActive(false);
            }}
          >
            <span>
              <Close />
            </span>
          </Button>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link__mobile active nav-text"
                  : "nav-link__mobile nav-text"
              }
            >
              <span>00</span> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive
                  ? "nav-link__mobile active nav-text"
                  : "nav-link__mobile nav-text"
              }
            >
              <span>01</span> Destinations
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/crews"
              className={({ isActive }) =>
                isActive
                  ? "nav-link__mobile active nav-text"
                  : "nav-link__mobile nav-text"
              }
            >
              <span>02</span> Crews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive
                  ? "nav-link__mobile active nav-text"
                  : "nav-link__mobile nav-text"
              }
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <span className="logo-emoji">🛒</span>
          <span className="logo-text">Mi Kiosco</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

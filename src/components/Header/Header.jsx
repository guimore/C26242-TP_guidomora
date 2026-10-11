import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={"/"} className="logo">
          <span className="logo-icon">🛒</span>
          <span className="logo-text">Mi Kiosco</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
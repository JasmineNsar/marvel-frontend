import "./header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header-container">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <div className="buttons">
        <Link to={"/"}>
          <button>CHARACTERS</button>
        </Link>

        <Link to={"/comics"}>
          <button>COMICS</button>
        </Link>

        <button>FAVORITES</button>
      </div>
    </section>
  );
};
export default Header;

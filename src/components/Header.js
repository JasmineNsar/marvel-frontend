import "./header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header-container">
      <div className="img">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="buttons">
        <Link to={"/"}>
          <button>CHARACTERS</button>
        </Link>

        <Link to={"/comics"}>
          <button>COMICS</button>
        </Link>
        <Link to={""}>
          <button>FAVORITES</button>
        </Link>
      </div>
    </section>
  );
};
export default Header;

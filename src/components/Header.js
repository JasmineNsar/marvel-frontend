import "./header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <div className="buttons">
        <Link to={"/"}>
          <button>Personnages</button>
        </Link>

        <Link to={"/comics"}>
          <button>Comics</button>
        </Link>

        <button>Favoris</button>
      </div>
    </div>
  );
};
export default Header;

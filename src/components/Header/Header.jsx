import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/searchCountry"}>Search Country</Link>
          </li>
          <li>
            <Link to={"/notes"}>Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

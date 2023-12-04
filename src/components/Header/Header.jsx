import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="first">First</NavLink>
        <NavLink to="second">Second</NavLink>
      </nav>
    </header>
  );
};

export default Header;

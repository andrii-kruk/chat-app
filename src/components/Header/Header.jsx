import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;

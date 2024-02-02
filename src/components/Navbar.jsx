import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

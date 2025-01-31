import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
      <nav id="navbar">
        <div id="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to='/ingredients'>Ingredients</Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
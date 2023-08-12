import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return <div className="navbar">
    <ul id="navbar">
      <li><Link className="nav-item" to='/'>Home</Link></li>
      <li><Link className="nav-item" to='/create-post'>Create Post</Link></li>
    </ul>
  </div>;
}

export default Navbar;

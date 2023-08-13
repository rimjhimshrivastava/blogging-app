import "../css/Navbar.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
margin: 0 2rem;
text-decoration: none;
text-decoration: none;
color: rgb(240, 201, 255);
font-size: 1.3rem;

&:hover{
color: white;
}
`;

function Navbar() {
  return <div className="navbar">
    <ul id="navbar">
      <li><StyledLink className="nav-item" to='/'>Home</StyledLink></li>
      <li><StyledLink className="nav-item" to='/create-post'>Create Post</StyledLink></li>
    </ul>
  </div>;
}

export default Navbar;

import { Link } from "react-router-dom";
import images from "../src/resources/images.js";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top" style={navStyle}>
      <Link to="/characters"> <img className="navLink" style={{paddingLeft:'10px'}} src={images['board']} alt="Plank Board"/> </Link>
      <Link to="/characters/new" style={{color:"white", paddingRight:'10px'}}>
      <button className="navLink">Add New Bounty</button>
      </Link>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333'
};

export default NavBar;

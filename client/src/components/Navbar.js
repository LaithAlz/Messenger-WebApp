import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
    <div className="navbar">
        <Link to="/"><img src={Logo} alt="Logo"></img></Link>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/profile">Profile</Link>
        <input type="search" />
        <button className="search-btn">Search</button>

    </div> 
    );
}
 
export default Navbar;
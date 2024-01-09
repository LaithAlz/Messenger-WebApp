import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import "../styles/Navbar.css";
import { ChatState } from "../context/ChatProvider";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const { user } = ChatState();
  const history = useNavigate();
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    history("/login");
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      setSearchError("Search is empty");
    } else {
      setSearchError("");

      try {
        history(`/search?query=${search}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/people">People</Link>
      <Link to="/profile">My Profile</Link>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
      {searchError && <div className="search-error">{searchError}</div>}{" "}
      {user ? (
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <Link to="/login" className="login-link">
          Log In
        </Link>
      )}
    </div>
  );
};

export default Navbar;

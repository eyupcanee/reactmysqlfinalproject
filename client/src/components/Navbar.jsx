import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = ({ scrollY }) => {
  const location = useLocation();
  const { currentUser, logout } = useContext(AuthContext);
  const scroll = () => {
    window.scrollTo(1516, 0);
    console.log("Func");
  };

  return (
    <div className={`navbar ${scrollY < -90 ? "navbar-background" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div
          className={`links ${
            (scrollY < -90) | (location.pathname !== "/") ? "text-black" : ""
          }`}
        >
          <Link className="link" to="/?cat=daily" onClick={() => scroll()}>
            <h6>DAILY</h6>
          </Link>
          <Link className="link" to="/?cat=christmas">
            <h6>CHIRSTMAS</h6>
          </Link>
          <Link className="link" to="/?cat=nightOut">
            <h6>NIGHT OUT</h6>
          </Link>
          <Link className="link" to="/?cat=sport">
            <h6>SPORT</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

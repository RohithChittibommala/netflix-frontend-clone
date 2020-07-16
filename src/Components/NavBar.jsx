import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const netflix =
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png";
const userIcon =
  "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png";

const Navbar = () => {
  window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector(".nav");
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.classList.add("sticky");
      navbar.classList.remove("navbar");
    } else {
      navbar.classList.add("navbar");
      navbar.classList.remove("sticky");
    }
  });
  const getNavbarIcon = (link, classn = null) => {
    return <img className={classn} src={`${link}`} alt="icon" />;
  };
  return (
    <div className="nav">
      <Link to="https://netflix.com">{getNavbarIcon(netflix)}</Link>
      <Link to="/usersaved">{getNavbarIcon(userIcon, "user-icon")}</Link>
    </div>
  );
};

export default Navbar;

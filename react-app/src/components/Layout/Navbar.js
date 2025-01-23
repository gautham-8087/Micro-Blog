import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">MyBlog</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Write a Blog</Link></li>
          <li><Link to="/my-blogs">My Blogs</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar nav-1">
          <section className="flex">
            <ul>
              <li>
                <Link to="/home" className="logo">
                  <i className="fas fa-house"></i>APNA GHAR
                </Link>
              </li>
              <li className="hover:text-zinc-700">
                <Link to="#">
                  BUY<i className="fas fa-angle-down"></i>
                </Link>
                <ul
                  className="Dropdown"
                  style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)"}}
                >
                    
                  <li>
                    <Link to="/Search">House</Link>
                  </li>
                  <li>
                    <Link to="/Search">Flat</Link>
                  </li>
                  <li>
                    <Link to="/Search">Shop</Link>
                  </li>
                  <li>
                    <Link to="/Search">Ready to move</Link>
                  </li>
                  <li>
                    <Link to="/Search">Furnished</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  SELL<i className="fas fa-angle-down"></i>
                </Link>
                <ul
                  className="Dropdown"
                  style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)" }}
                >
                  <li>
                    <Link to="/Contact">Post property</Link>
                  </li>
                  <li>
                    <Link to="/listings">Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Listing">RENT</Link>
                <ul
                  className="Dropdown"
                  style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)" }}
                >
                  <li>
                    <Link to="#">House</Link>
                  </li>
                  <li>
                    <Link to="#">Flat</Link>
                  </li>
                  <li>
                    <Link to="#">Shop</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  Help<i className="fas fa-angle-down"></i>
                </Link>
                <ul
                  className="Dropdown"
                  style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)" }}
                >
                  <li>
                    <Link to="/about">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT US</Link>
                  </li>
                  <li>
                    <Link to="/contact">FAQ</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/Contact">
                  Post property<i className="fas fa-paper-plane"></i>
                </Link>
              </li>
              <li>
                <Link to="/Listings">
                  Saved <i className="far fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Account <i className="fas fa-angle-down"></i>
                </Link>
                <ul
                  className="Dropdown"
                  style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)" }}
                >
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Nav;

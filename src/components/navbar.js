import React from 'react';
import './index-style.css'

export default function Navbar() {
  return (
    <nav className="navbar-row">
      <div className="navbar-containers">
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="shop">SHOP</a>
          </li>
          <li>
            <a href="collections">COLLECTIONS</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

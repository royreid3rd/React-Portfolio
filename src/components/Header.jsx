import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import your CSS file

export default function Header({ name, links }) {
  return (
    <header className="header navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <span className="navbar-brand">{name}</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
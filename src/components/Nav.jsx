import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Header
      name="Roy Reid"
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

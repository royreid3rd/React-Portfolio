import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/Footer.css'; // Import your CSS file

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/royreid3rd" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
}

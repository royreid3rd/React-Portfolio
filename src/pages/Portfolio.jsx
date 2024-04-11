import React from 'react';
import Projects from '../components/Projects';
import '../styles/Portfolio.css'; // Import your CSS file

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <Projects />
      </div>
    </div>
  );
}

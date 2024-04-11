import React from 'react';
import '../styles/Resume.css'; // Import your CSS file

const proficiencyList = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git',
  'Responsive Design',
  'Bootstrap',
  'RESTful APIs',
];

export default function Resume() {
  return (
    <div className="container resume-container">
      <h2 className="text-center resume-heading">Resume</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Download My Resume</h4>
          <p>
            You can download my resume by clicking the link below:
            <br />
            <a href="/src/Images/Roy3Resume.pdf" download>
              Download Resume
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <h4>Proficiencies</h4>
          <ul className="list-group resume-list">
            {proficiencyList.map((proficiency, index) => (
              <li key={index} className="list-group-item resume-list-item">
                {proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

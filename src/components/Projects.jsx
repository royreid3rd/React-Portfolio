import React from 'react';
import '../styles/Projects.css'; // Import your CSS file

const projectsData = [
  {
    id: 1,
    title: 'Bootmate',
    image: 'src/Images/project-collab.jpg', // Replace with the actual image file name or path
    deployedLink: 'https://bootmate.onrender.com/', // Replace with the deployed application link
    githubLink: 'https://github.com/BrandBlood97/BootMate', // Replace with the GitHub repository link
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    image: 'src/Images/weather.jpg', // Replace with the actual image file name or path
    deployedLink: 'https://royreid3rd.github.io/Weather-dashboard/', // Replace with the deployed application link
    githubLink: 'https://github.com/royreid3rd/Weather-dashboard', // Replace with the GitHub repository link
  },
  {
    id: 3,
    title: 'JATE',
    image: 'src/Images/calculator.jpg', // Replace with the actual image file name or path
    deployedLink: 'https://single-page-text-editor.onrender.com/', // Replace with the deployed application link
    githubLink: 'https://github.com/royreid3rd/Single-Page-Text-Editor', // Replace with the GitHub repository link
  },
  {
    id: 4,
    title: 'Note-Taker',
    image: 'src/Images/Notebook.jpg', // Replace with the actual image file name or path
    deployedLink: 'https://enigmatic-cliffs-78463-6c726ffe720f.herokuapp.com/', // Replace with the deployed application link
    githubLink: 'https://github.com/royreid3rd/Takin-Notes', // Replace with the GitHub repository link
  },
  {
    id: 5,
    title: 'Password Generator',
    image: 'src/Images/password.jpg', // Replace with the actual image file name or path
    deployedLink: 'https://royreid3rd.github.io/Password-Generation-Application/', // Replace with the deployed application link
    githubLink: 'https://github.com/royreid3rd/Password-Generation-Application', // Replace with the GitHub repository link
  },
  
];

export default function Projects() {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
            <div className="card project-card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="d-flex justify-content-between">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View App</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

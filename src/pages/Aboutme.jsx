import React from 'react';
import '../styles/AboutMe.css';
import myPhoto from '../Images/Picture-of-me.jpg'
export default function AboutMe() {
  return (
    <div>
     

     <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-image">
            <img src={myPhoto} alt="My Photo" />
          </div>
          <div className="hero-text">
            <h2>Welcome to my portfolio!</h2>
            <p>My name is Roy Reid and I am a full stack web developer. I am passionate about creating dynamic and responsive web applications. Please check out my work below and feel free to contact me if you would like to collaborate on a project together.</p>
          </div>
        </div>
      </section>

      <section id="about-me" className="about-me">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div>
          <p>
            I am a full stack web developer with a passion for creating dynamic and responsive web applications. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, SQL, and React. I am currently enrolled in the University of Central Florida's Coding Boot Camp and am excited to continue learning and growing as a developer. Please check out the projects on the Portfolio page to see some of my work. You can also contact me through this Website. I'm looking forward to hearing from you and potentially collaborating on a project together!
          </p>
        </div>
      </section>
    </div>
  );
}
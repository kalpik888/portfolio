// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="project-list">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Online Store App</h3>
          <ul>
            <li>Developed an online store app using the MERN stack.</li>
            <li>User and admin login/register features.</li>
            <li>Used JWT for user authentication.</li>
            <li>MongoDB for the database.</li>
            <li>Created an admin dashboard, cart, and checkout pages.</li>
            <li>The admin dashboard allows for adding/removing products and tracking order status.</li>
          </ul>
          <p>
            <strong>Technologies Used:</strong> React.js, MUI, MongoDB, Express, JWT, Node.js
          </p>
          <p>
            <strong>GitHub Link:</strong> <a href="https://github.com/kalpik888/anime-Online-store" target="_blank" rel="noopener noreferrer">View Project</a>
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Real-Time Chat App</h3>
          <ul>
            <li>Developed a real-time chat app using the MERN stack.</li>
            <li>Integrated Pusher API for instant messaging.</li>
            <li>Full-stack development encompassing user authentication.</li>
            <li>Implemented real-time communication.</li>
            <li>Managed database operations effectively.</li>
          </ul>
          <p>
            <strong>Technologies Used:</strong> React, Express, MongoDB, Node.js, Pusher API, JWT
          </p>
          <p>
            <strong>GitHub Link:</strong> <a href="https://github.com/kalpik888/whatsappclone" target="_blank" rel="noopener noreferrer">View Project</a>
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>CI/CD Pipeline for Node.js Application</h3>
          <ul>
            <li>Developed a Continuous Integration and Continuous Deployment (CI/CD) pipeline.</li>
            <li>Containerized the project using Docker.</li>
            <li>Posted the project on Docker Hub.</li>
            <li>Deployed the application on Render.</li>
            <li>Automated testing using Jest and GitHub Actions.</li>
          </ul>
          <p>
            <strong>Technologies Used:</strong> Node.js, Git, GitHub Actions, Docker, Render
          </p>
          <p>
            <strong>GitHub Link:</strong> <a href="https://github.com/kalpik888/cicd-pipeline" target="_blank" rel="noopener noreferrer">View Project</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;

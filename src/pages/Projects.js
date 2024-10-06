import React from "react";
import './Projects.css';

const projects = [
    {
      name: 'Mental Health Support Platform',
      description: 'A web application providing resources and support for mental health awareness, self-care, and community engagement. Key features include educational content, self-assessment tools, support forums, therapist directory, and journaling and mood tracking. Built with React.js for the frontend and Node.js for the backend.',
      link: 'https://github.com/NiroshaPerera/mental-health-support-platform'
    },
    {
        name: 'CSharpFormDesign',
        description: 'Create stunning and interactive user interfaces with this C# Form Design project. This repository provides a collection of well-designed forms and UI components that you can easily integrate into your C# applications.',
        link: 'https://github.com/NiroshaPerera/CSharpFormDesign'
      },
      {
        name: 'SimpleBlog_Xml',
        description: 'This project demonstrates the use of XML as a simple and structured format for managing blog posts, allowing users to create, read, update, and delete posts without the need for a traditional database. ',
        link: 'https://github.com/NiroshaPerera/SimpleBlog_xml'
      },
    
  ];
  

function Projects () {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;
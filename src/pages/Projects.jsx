import React from 'react';
import '../styles/pages/projects.css'; 
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

export default function Project() {
  const projects = [
    {
      image: project1,
      title: 'Work 1',
      description: 'Art Design'
    },
    {
      image: project2,
      title: 'Work 2',
      description: 'A 3D room model.'
    },
    {
      image: project3,
      title: 'Work 3',
      description: 'Design for building.'
    }
  ];

  return (
    <section className="project-section">
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

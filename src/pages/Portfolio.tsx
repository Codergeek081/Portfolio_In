import React from 'react';
import './Portfolio.css';

const projects = [
  { title: 'Project 1', description: 'Description of project 1...', link: '#', image: '/sea.png' },
  { title: 'Project 2', description: 'Description of project 2...', link: '#', image: '/Car.png' },
  { title: 'Project 3', description: 'Description of project 3...', link: '#', image: '/Yellow.png' },
  { title: 'Project 4', description: 'Description of project 4...', link: '#', image: '/double.png' },
  { title: 'Project 5', description: 'Description of project 5...', link: '#', image: '/math.png' },
];

const Portfolio = () => {
  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4 text-center">Portfolio</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} rel="noreferrer" target="_blank">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid portfolio-img"
              />            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

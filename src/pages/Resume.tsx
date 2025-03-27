import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>Download My Resume</p>
      <h2>Front-end Proficiencies</h2>
        <ul className="col-sm-12">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>JQUERY</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MYSQL Sequilize</li>
          
        </ul>
      <section>
        <h2>Education</h2>
        <p>Details about education...</p>
      </section>
      <section>
        <h2>Experience</h2>
        <p>Details about experience...</p>
      </section>
      <section>
        <h2>Skills</h2>
        <p>Details about skills...</p>
      </section>
    </div>
  );
};

export default Resume;

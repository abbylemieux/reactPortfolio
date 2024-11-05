import React from "react";
import "/src/Styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <section className="resume-section">
        <h2>Overview</h2>
        <p>
          Working on a rigorous coding bootcamp focused on full-stack web
          development. Acquired practical knowledge and hands-on experience with
          various programming languages, frameworks, and tools essential for
          building dynamic and responsive applications. Developed a strong
          foundation in both front-end and back-end development, working
          individually and in collaborative environments.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Front-End Development:</strong> HTML, CSS, JavaScript, React, Responsive Design</li>
          <li><strong>Back-End Development:</strong> Node.js, Express.js</li>
          <li><strong>Database Management:</strong> MongoDB, SQL</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Other Tools & Technologies:</strong> RESTful APIs, AJAX, JSON, Bootstrap</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website to showcase projects and skills.</p>
          <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React</p>
        </div>
        <div className="project">
          <h3>Full-Stack Application</h3>
          <p>Developed a full-stack application that integrates a RESTful API to handle data storage and retrieval.</p>
          <p><strong>Technologies Used:</strong> Node.js, Express.js, MongoDB, Bootstrap</p>
        </div>
        <div className="project">
          <h3>Interactive Quiz App</h3>
          <p>Created a quiz application with a user-friendly interface and real-time scoring.</p>
          <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Key Learnings</h2>
        <ul>
          <li>Enhanced problem-solving and debugging skills.</li>
          <li>Experience with Git and GitHub for version control and collaboration.</li>
          <li>Worked with RESTful APIs for data integration and manipulation.</li>
          <li>Built responsive designs for various devices to ensure a smooth user experience.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Future Goals</h2>
        <p>
          Continue building technical skills by developing new projects and contributing to open-source.
          Aim to explore advanced concepts like authentication, state management, and optimization techniques.
          Seek opportunities to apply my bootcamp knowledge in a professional setting.
        </p>
      </section>
    </div>
  );
};

export default Resume;

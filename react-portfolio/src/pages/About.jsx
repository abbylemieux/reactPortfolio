import React from "react";
import "/src/Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-name">
          <h2>Abby Lemieux</h2> {/* Added name here */}
        </div>
        <div className="about-text">
          <p>
            Hello! I’m Abby Lemieux, currently working as an appliance
            salesperson with a strong passion for coding. I enjoy exploring the
            world of technology and constantly expanding my skills in
            programming. My journey into tech started as a personal interest,
            but it quickly grew into a dedicated pursuit of learning and growth.
          </p>
          <p>
            I’m eager to transition into a tech role where I can leverage my
            customer-focused experience and passion for coding to solve
            real-world problems and create applications that make a difference.
            My goal is to combine my knowledge in sales and tech to build
            user-centered solutions that are both functional and intuitive.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Database Management</li>
          </ul>
          <p>
            When I'm not coding, I enjoy spending time with friends and family
            and my two puppies. I’m always open to connecting and collaborating
            with others who share a love for technology and innovation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

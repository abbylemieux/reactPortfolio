import React from "react";
import "/src/Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="footer-links">
        <a href="https://github.com/abbylemieux" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/abby-lemieux-20b191256/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span>|</span>
        <a href="https://stackoverflow.com/users/25911516/abby-lemieux" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;

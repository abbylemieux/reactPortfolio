import React from "react";
import "/src/Styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "trailTrekker.io",
    imageUrl: "src/assets/trailTrekker.io.png",
    githubUrl: "https://github.com/abbylemieux/trailTrekker.io",
  },
  {
    id: 2,
    title: "Movie Trivia",
    imageUrl: "src/assets/movieTrivia.jpg",
    githubUrl: "https://github.com/abbylemieux/Movie-Trivia",
  },
  {
    id: 3,
    title: "README Gen",
    imageUrl: "src/assets/readmeGen.png",
    githubUrl: "https://github.com/abbylemieux/READMEgen/blob/main/README.md",
  },
  {
    id: 4,
    title: "vehcileBuilder",
    imageUrl: "src/assets/vehicleBuilder.png",
    githubUrl: "https://github.com/abbylemieux/vehicleBuilder",
  },
  {
    id: 5,
    title: "React Portfolio",
    imageUrl: "src/assets/reactPortfolio.png",
    githubUrl: "https://github.com/abbylemieux/reactPortfolio",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
            <div className="overlay">
              <h3>{project.title}</h3>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// ─── Project Data ──────────────────────────────────────────────────────────────
// 🔧 EDIT THIS: Replace with your actual projects and GitHub links
const PROJECTS = [
  {
    title: 'Employee Attrition & Financial Impact Analysis',
    description:
      'A machine learning project that predicts employee attrition and quantifies its financial impact on organizations. Uses classification models to identify at-risk employees and calculates cost implications to help HR teams make data-driven retention decisions.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    github: 'https://github.com/SaiSastha/ML_Project_Employee-Attrition-Financial-Impact-Analysis',
    icon: '🤖',
  },
  {
    title: 'Image Processing Project',
    description:
      'An image processing application that applies various computer vision techniques including filtering, edge detection, morphological operations, and transformations. Demonstrates core concepts of digital image manipulation and analysis.',
    tags: ['Python', 'OpenCV', 'Image Processing', 'Computer Vision', 'NumPy'],
    github: 'https://github.com/SaiSastha/Image-Processing-Project',
    icon: '🖼️',
  },
];
// ───────────────────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">
        {/* Hero */}
        <div className="projects-hero">
          <p className="projects-hero__label">My Work</p>
          <h1 className="projects-hero__title">
            Things I've <em>Built</em>
          </h1>
          <p className="projects-hero__subtitle">
            A collection of projects that showcase my skills in systems
            programming, networking, web development, and software architecture.
            Each one was a learning adventure.
          </p>
          <p className="projects-count">
            Showing <span>{PROJECTS.length}</span> projects
          </p>
        </div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="projects-cta">
          <p>
            These are just the highlights. Find more experiments,
            coursework, and side projects on my GitHub profile.
          </p>
          <a
            href="https://github.com/SaiSastha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

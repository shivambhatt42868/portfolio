import React from 'react';

const ProjectOverlay = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const keepOpen = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="project-overlay" onClick={onClose} data-testid="project-overlay" role="presentation">
      <div
        className="project-overlay-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-overlay-title"
        onClick={keepOpen}
      >
        <button type="button" className="project-overlay-close" onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <h3 id="project-overlay-title">{project.title}</h3>
        <p className="project-overlay-role">{project.role}</p>
        <p className="project-overlay-summary">{project.oneLiner}</p>
        <ul>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectOverlay;

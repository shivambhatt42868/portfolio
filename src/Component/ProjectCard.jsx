import React from 'react';

const ProjectCard = ({ project, onOpen }) => {
  const handleOpen = () => {
    onOpen(project.id);
  };

  return (
    <div className="col-md-4 animate-box">
      <button
        type="button"
        className="project"
        style={{ backgroundImage: `url(${project.image})` }}
        onClick={handleOpen}
        data-testid={`project-card-${project.id}`}
        aria-label={`Open ${project.title} details`}
      >
        <div className="desc">
          <div className="con">
            <h3>{project.title}</h3>
            <span>{project.cardSummary}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ProjectCard;

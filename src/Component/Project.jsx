import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import ProjectOverlay from './ProjectOverlay';
import { PROJECTS } from './projectsData';
import { useProjectOverlay } from './useProjectOverlay';

const Project = () => {
  const { selectedId, openProject, closeProject } = useProjectOverlay();
  const selectedProject = PROJECTS.find((item) => item.id === selectedId) || null;

  return (
    <div>
      <section className="colorlib-work" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Projects</h2>
            </div>
          </div>
          <div className="row">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>
      <ProjectOverlay project={selectedProject} onClose={closeProject} />
    </div>
  );
};

export default Project;

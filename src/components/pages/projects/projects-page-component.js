import './projects-page-component.css';
import React from 'react';
import underConstructionLogo from '../../commons/under-construction-logo.png'

function ProjectsComponent() {
    return (
      <div className="projects-container">
        <img src={underConstructionLogo} alt="Under construction logo" />
      </div>
    );
  }

export default ProjectsComponent;
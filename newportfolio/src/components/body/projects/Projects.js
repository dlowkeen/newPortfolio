import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import projects from './projectsPreview';
import SectionHead from "../../common/SectionHead";
require('./projects.css');

class Projects extends Component {
  constructor() {
    super();
    this.renderProjects = this.renderProjects.bind(this);
  }
  componentDidMount() {
    console.log(projects);
  }

  renderProjects() {
    console.log("Hi there");
    return projects.map(project => {
      return <div className="card">
          <div className="image">
            <Image src={project.src} alt={project.alt} as="a" href={project.href} target="_blank" />
          </div>
          <div className="content">
            <a className="header" href={project.href}>
              {project.name}
            </a>
            <div className="description">
              <p>{project.description}</p>
              <p>
                <strong>Responsible For: </strong>
                {project.responsibilities}
              </p>
            </div>
          </div>
        </div>;
    });
  }
  render() {
    return (
      <div id="projects">
        <SectionHead name="Projects" />
        <div class="ui three stackable cards">
          {this.renderProjects()};
        </div>
        <div class="ui three stackable cards" />
        <br />
        <br />
      </div>
    );
  }
}

export default Projects;

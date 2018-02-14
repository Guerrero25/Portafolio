import React, { Component } from 'react';

import coverProject from '../img/cover_project.jpg';

class Projects extends Component {
    render () {
        return (
            <section className="project-section">
                <h1>Projects</h1>
                <div className="projects-content">
                    <div className="project-item">
                        <figure className="project-cover">
                            <img src={coverProject} alt="project_cover" />
                        </figure>
                        <h3>Project name</h3>
                        <div className="skills-used">
                            <span className="skill-used">React</span>
                            <a className="reposite-url" href="#" target="_blank" >Github's Reposite</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <figure className="project-cover">
                            <img src={coverProject} alt="project_cover" />
                        </figure>
                        <h3>Project name</h3>
                        <div className="skills-used">
                            <span className="skill-used">React</span>
                            <span className="skill-used">Sass</span>
                            <span className="skill-used">Gulp</span>
                            <a className="reposite-url" href="#" target="_blank" >Github's Reposite</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <figure className="project-cover">
                            <img src={coverProject} alt="project_cover" />
                        </figure>
                        <h3>Project name</h3>
                        <div className="skills-used">
                            <span className="skill-used">Angular</span>
                            <span className="skill-used">Wecbpack</span>
                            <a className="reposite-url" href="#" target="_blank" >Github's Reposite</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
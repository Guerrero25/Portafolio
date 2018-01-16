import React, { Component } from 'react';

import coverbg from '../img/cover-bg.jpeg';
import profile from '../img/profile.jpg';
import coverProject from '../img/cover_project.jpg';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <section className="profile-section">
                    <div style={{backgroundImage: 'url(' + coverbg + ')' }} className="info-profile-card profile-cover cover-filter">
                        <figure className="profile-avatar">
                            <img src={profile} alt="profile-avatar" />
                        </figure>
                        <span className="name">Omar Guerrero</span>
                        <span className="location">Cartagena de Indias, Colombia</span>
                    </div>
                    <div className="info-profile-card info-description">
                        <h3>Bio:</h3>
                        <p className="description">I'm a passionate student of system engineering, web developer trainee and curious person.</p>
                    </div>
                    <div className="info-profile-card">
                        <h3>Contacts:</h3>
                        <div className="contact-item">
                            <i className="fa fa-envelope-o"></i>
                            <span>guerrero9725@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <span><a href="https://twitter.com/oguerrero725" target="_blank" rel="noopener noreferrer" >@OGuerrero725</a></span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            <span><a href="https://github.com/Guerrero25" target="_blank" rel="noopener noreferrer" >@Guerrero25</a></span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-rss" aria-hidden="true"></i>
                            <span><a href="https://devguerrero.me" target="_blank" rel="noopener noreferrer" >devguerrero.me</a></span>
                        </div>
                        
                    </div>
                    <div className="info-profile-card">
                        <h3>Skills:</h3>
                        <div className="skills">
                            <span className="skill">Javascript</span>
                            <span className="skill">Node.js</span>
                            <span className="skill">Ruby</span>
                            <span className="skill">RubyOnRails</span>
                            <span className="skill">Html</span>
                            <span className="skill">Css</span>
                            <span className="skill">Flexbox</span>
                        </div>
                    </div>
                </section>
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
            </div>
        )
    }
}

export default Main;
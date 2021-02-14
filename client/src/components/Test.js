import React from "react";
import '../styles/components/_aboutpage.scss'

export const AboutPage = () => {
  return (
    <div className="about" id="about-wrapper">
      <div className="about-top-container">
        <div className="top-div-first">
          <h3>Education</h3>
          <div className="education-list">
            <span className="education-span1">
              2016 - 2018 California State University, Fresno
            </span>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
          </div>
          <p>Master's in Computer Science.</p>

          <div className="education-list">
            <span className="education-span2">
              2010 - 2014 Punjab Technical University, India
            </span>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
          </div>
          <p>Bachelor's of Technology in Computer Science & Engg.</p>
        </div>
        <div className="top-div-second">
          <img
            className="mypic"
            src={process.env.PUBLIC_URL + "/mypic.jpeg"}
            alt="pic"
          />
        </div>
        <div className="top-div-third">
          <h3>Skills</h3>

          <ul>
            <li>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>Python</span>
            </li>
            <li>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>ReactJS</span>
            </li>
            <li>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>MS SQL Server 2012/2016, AWS</span>
            </li>
            <li>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>Numpy, Pandas</span>
            </li>
            <li>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
            <span>AWS Associate Developer (See Certificate) </span>
          </li>
          </ul>
        </div>
      </div>
      <div className="about-bottom-container">
        <div className="bottom-div-first">
          <h3>Professional</h3>
          <div className='experience-list'>
            <span>2019 - 2020 : Lotane & Associates</span>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
          </div>
          <p>Worked as a SQL Specialist/Data Analyst</p>
          <div className='experience-list'>
            <span>2018 - 2019 : AZTech Technologies</span>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
          </div>
          <p>Worked as a Data Analyst</p>{" "}
          <div className='experience-list'>
            <span>2014 - 2016 : Microstate Enterprises</span>
            <i aria-hidden="true" class="far fa-dot-circle"></i>
          </div>
          <p>Worked as a SQL Developer</p>
        </div>
        <div className="bottom-div-second">
          <h3>My Experience</h3>
          <span>
            A creative and innovative Entry-level Architect, passionate about
            building designs and advanced construction solutions. Posses the
            ability to evaluate and manipulate designs as per client
            expectation. Have a strong focus on energy-efficient designs and
            open to contributing designs to a design firm's project repository.
          </span>
          <div className="icons">
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100010821227821"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square facebook"> </i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/gsrana1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin linkedin" url></i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/gsrana92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

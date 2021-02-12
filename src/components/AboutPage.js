import React from "react";

export const AboutPage = () => {
  return (
    <div className="about" id="about-wrapper">
      <div className="about-top-container">
        <div className="top-div-first">
          <h3>Education</h3>
          <ul>
            <li>2016 - 2018 California State University, Fresno</li>
            <p>Master's in Computer Science</p>
            <li>2010 - 2014 Punjab Technical University, India</li>
            <p>Bachelor's of Techology in Computer Science & Engg.</p>
          </ul>
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
            <li>Python</li>
            <li>ReactJS</li>
            <li>MS SQL Server 2012/2016, AWS</li>
            <li>Numpy, Pandas</li>
          </ul>
        </div>
      </div>
      <div className="about-bottom-container">
        <div className="bottom-div-first">
          <ul>Professional</ul>
          <li>2019 - 2020 Lotane & Associates</li>
          <p>Worked as a SQL Specialist/Data Analyst</p>
          <li>2018 - 2019 AZTech Technologies</li>
          <p>Worked as a Data Analyst</p>
          <li>2014 - 2016 Microstate Enterprises</li>
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
                <i class="fab fa-facebook-square facebook"> </i>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/gsrana1/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin linkedin" url></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/gsrana92" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

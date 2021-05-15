import React from "react";
//import mypic from "../assets/mypic.jpeg";
//import { useSpring, animated } from "react-spring";
import AWS from "../assets/AWS Certified Developer - Associate certificate.pdf";
import resume from "../assets/Resume_DA.pdf";
import download from "../assets/download.png";
//import {useTransition, animated} from 'react-spring'
//import { TweenMax, gsap } from "gsap";
import "../styles/components/_aboutpage.scss";

const image = "https://my-web-bucket-v1.s3.us-east-2.amazonaws.com/mypic2.jpg";

export const AboutPage = () => {
  return (
    <section className="wrapper" id="about">
      <div className="box-layout">
        <div className="box-layout__top">
          <div className="box-layout__top__education">
            <h2>Education</h2>
            <div className="box-layout__top__education__item">
              <span>2016 - 2018 : California State University, Fresno</span>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
            </div>
            <p>Master's Of Science in Computer Science.</p>

            <div className="box-layout__top__education__item">
              <span>2010 - 2014 : Punjab Technical University, India</span>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
            </div>
            <p>Bachelor's of Technology in Computer Science & Engg.</p>
          </div>

          <div className="box-layout__top__image">
            <img alt="mypic2" className="profile_pic" src={image} />
          </div>
          <div className="box-layout__top__skills">
            <h2>Skills</h2>
            <div className="box-layout__top__skills__item">
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>Python</span>
            </div>
            <div className="box-layout__top__skills__item">
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>ReactJS, Redux, Babel, ES6, Webpack</span>
            </div>
            <div className="box-layout__top__skills__item">
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>Microsoft SQL Server 2012/2016, AWS</span>
            </div>
            <div className="box-layout__top__skills__item">
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>Numpy, Pandas</span>
            </div>
            <div className="box-layout__top__skills__item">
              <i aria-hidden="true" class="far fa-dot-circle"></i>
              <span>
                AWS Associate Developer{" "}
                <a className="link" rel="noopener noreferrer" href='https://gsrana-aws-bucket.s3.amazonaws.com/AWS+Certified+Developer+-+Associate+certificate.pdf' target="_blank">
                  (See Certificate)
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="box-layout__bottom">
          <div className="box-layout__bottom__professional">
            <h2>Professional</h2>
            <div className="box-layout__bottom__professional__item">
              <span>2019 - 2020 : Lotane & Associates (Cocoa, FL)</span>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
            </div>
            <p>Worked as a SQL Specialist/ Data Analyst.</p>

            <div className="box-layout__bottom__professional__item">
              <span>2018 - 2019 : AZTech Technologies (Texas, US)</span>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
            </div>
            <p>Worked as a Data Analyst.</p>

            <div className="box-layout__bottom__professional__item">
              <span>
                2014 - 2016 : Microstate Enterprises (Chandigarh, India)
              </span>
              <i aria-hidden="true" class="far fa-dot-circle"></i>
            </div>
            <p>Worked as a SQL Developer.</p>
          </div>
          <div className="box-layout__bottom__experience">
            <h2>My Experience</h2>
            <p>
              A creative and innovative Entry-level Architect, passionate about
              building designs and advanced construction solutions. Posses the
              ability to evaluate and manipulate designs as per client
              expectation. Have a strong focus on energy-efficient designs and
              open to contributing designs to a design firm's project
              repository.
            </p>
            <div className="resume">
              <img height="20" width="20" src={download} alt="download-icon" className='download-icon'/>
              <a className="link-resume" href='https://my-web-bucket-v1.s3.us-east-2.amazonaws.com/Resume_PDF.pdf' target='_blank' rel='noopener noreferrer'>Download my resume</a>
            </div>
            <div className="box-layout__bottom__experience__social-icons">
              <div className="box-layout__bottom__experience__social-icons__github">
                <a
                  href="https://github.com/gsrana92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square github"></i>
                </a>
              </div>
              <div className="box-layout__bottom__experience__social-icons__linkedin">
                <a
                  href="https://www.linkedin.com/in/gsrana1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin linkedin" url></i>
                </a>
              </div>
              <div className="box-layout__bottom__experience__social-icons__facebook">
                <a
                  href="https://www.facebook.com/profile.php?id=100010821227821"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square facebook"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

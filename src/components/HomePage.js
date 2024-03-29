import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Spring } from 'react-spring';
import myImage from '../assets/mypic.jpeg';
import "../styles/components/_homepage.scss";

const image1 = "https://gsrana-aws-bucket.s3.amazonaws.com/blue.jpg";

export const HomePage = () => {
  // useEffect(() => {
  //   TweenMax.to(".line-class", 1, { y: 150 });
  // }, []);

  return (
    <Parallax bgImage={image1} blur={{ min: -10, max: 10 }} strength={-100}>
      <div className="home_wrapper">
        <div className="showcase" id="showcase">
          <span>Hello!</span>
        </div>
        <div className='showcase__header'>
        <h3>I'm Gaurav Rana</h3>
        <h4>Full Stack Web Developer</h4>
        </div>

        <div id="container" className="container">
          I love creating beautiful websites, and solving complex problems. A
          huge cricket fan and in my spare time I like to read fantasy novels
          and play video games.
        </div>
        <div className="line-class">
          <img
            width='20'
            height='200'
            className="line"
            src={process.env.PUBLIC_URL + "/vertical-line.png"}
            alt="vertical"
          />
        </div>
      </div>
    </Parallax>
  );
};

export default HomePage;

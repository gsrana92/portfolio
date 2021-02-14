import React from "react";
import { Parallax } from 'react-parallax';
import '../styles/components/_homepage.scss'

const image1 = 'https://gsrana-aws-bucket.s3.amazonaws.com/blue.jpg'

export const HomePage = () => {
  return (
    <Parallax  bgImage={image1} blur={{ min: -10, max: 10 }} strength={-100}>
    <div className="home-wrapper" id="home">
      <div className="container">
        <div className="container-span">
          <span>Hello!</span>
        </div>
        <div className="container-heading">
          <h4>I'm a Web Developer</h4>
        </div>
        <div className="container-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="line-class">
          <img
            className="line"
            src={process.env.PUBLIC_URL + "/vertical-line.png"}
            alt="vertical"
          />
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default HomePage;

import React from "react";
import Card from "./Card";
import "../styles/components/_projects.scss";
import "../styles/components/_card.scss";


export const Projects = () => {
  return (
    <div className="wrapper-projects" id="projects">
      <div className="projects-title">
        <h2>Projects</h2>
        <div className="projects-title-descr">
          <span>Some of the things that I've built.</span>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <Card
            title="Expensify"
            imageUrl="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            body="A web app to track your expenses."
            demoUrl='https://github.com/gsrana92/expensify-app'
          />
        </div>
        <div className="card">
          <Card
            title="Indecision"
            imageUrl="https://images.unsplash.com/photo-1454166155302-ef4863c27e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            body="A simple web app to help you keep track of things to do."
            demoUrl='https://github.com/gsrana92/indecision-app'
          />
        </div>
        <div className="card">
          <Card
            title="MovieDB"
            imageUrl="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            body="A website to get details of all imdb movies."
            demoUrl='https://github.com/gsrana92/movie-app'
          />
        </div>
        <div className="card">
          <Card
            title="Book Library"
            imageUrl="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            body="A website where you can find latest New York Times bestsellers books list."
            demoUrl='https://github.com/gsrana92/book-library'
          />
        </div>
        <div className="card">
          <Card
            title="Contact form template"
            imageUrl="https://divimundo.com/wp-content/uploads/2019/03/divi-contact-form-design.png"
            body="A beautiful template for a contact form for any website."
            demoUrl='https://github.com/gsrana92/contact-page'
          />
        </div>
        <div className="card">
          <Card
            title="Leet Code solutions"
            imageUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            body="My python solutions to leetcode problems."
            demoUrl='https://github.com/gsrana92/leetcode-python'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

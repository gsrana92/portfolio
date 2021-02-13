import React from "react";
import Card from "./Card";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
      Projects
      <div className='projects-title-descr'>
      <span>Some of the things that I've built.</span>

      </div>
    
      </div>

      <div className="grid">
        <div className='card'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses'/>
        </div>
        <div className='card2'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses' />
        </div>
        <div className='card3'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses'/>
        </div>
        <div className='cardss'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses'/>
        </div>
        <div className='cardss'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses'/>
        </div>
        <div className='cardss'>
        <Card title='Expensify' imageUrl='https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' body='A web app to track your expenses'/>
        </div>
      </div>
    </div>
  );
};

export default Projects;

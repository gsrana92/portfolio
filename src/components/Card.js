import React from "react";
import '../styles/components/_card.scss'

export default function Card({ title, imageUrl, body , demoUrl}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className='images' src={imageUrl} alt={title} />
      </div>
      <div className="card-overlay">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="card-btn">
          <button className='demo-btn'>
            <a href={demoUrl} target='_blank' rel='noreferrer'>Github</a>
          </button>
        </div>
      </div>
    </div>
  );
}

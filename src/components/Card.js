import React from "react";

export default function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className='images' src={imageUrl} alt="" />
      </div>
      <div className="card-overlay">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="btn">
          <button>
            <a href='https://github.com/gsrana92/portfolio'>Demo</a>
          </button>
        </div>
      </div>
    </div>
  );
}

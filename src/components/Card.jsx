import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img my-card-img" src={props.url} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;

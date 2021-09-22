import React from "react";
import { Link } from "react-router-dom";

import "../../css/BusinessCard.css";

export default function BusinessCard(props) {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.background, color: props.color }}
    >
      <i class={props.icon}></i>
      <div className="card-info">
        <h3>{props.title}</h3>
        <p className="card-description">{props.description}</p>
        <Link to={props.to} className="card-CTA">
          <h3>{props.CTA}</h3>
          <i class="fas fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import "./style.css";

function FoodCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.onClick} />
      </div>
    </div>
  );
}

export default FoodCard;

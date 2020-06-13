import React from "react";

export default function Label(props) {
  let className = "Lvl-item " + props.className;
  
  return (
    <div className="Label ">
      <h5 className={className}>{props.name}</h5>
      <h2 className={className}>{props.total}</h2>
      <h5 className={className}>{props.delta}</h5>
    </div>
  );
}

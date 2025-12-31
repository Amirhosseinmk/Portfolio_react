import React from "react";

function Box(props) {
  return (
    <div class="col">
      <div class="card h-100 d-flex flex-column">
        <img src={props.image} class="card-img-top" alt="project visual" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text" style={{color:"black"}}>{props.text}</p>
        </div>
        <div class="card-footer mt-auto">
          <p class="text-muted mb-2">{props.language}</p>
          <a class="btn btn-warning w-100" href={props.link}>
            Git
          </a>
        </div>
      </div>
    </div>
  );
}

export default Box;

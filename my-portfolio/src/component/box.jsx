import React from "react";

function Box(props) {
  return (
    <div>
      <div class="card h-60 w-60 ">
        <img src={props.image} class="card-img-top" alt="project visual" />
        <div class="card-body d-flex flex-column inside">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
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

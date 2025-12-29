import React from "react";
import image from "../images/pic1.jpg";
import '../styles/main.css';



function Home() {
  return (
    <div style={{ backgroundColor: "rgb(179, 170, 170)"}}>
      {/* Profile Card */}
      <div className="container mt-6 d-flex justify-content-center profile">
        <div className="card mb-5">
          <div className="row g-0 ">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="Profile"
              style={{ height: "450px", width: "200px", margin: "20px" }}
            />
            <div className="col-md-8">
              <div className="card-body" style={{ paddingTop: "60px" }}>
                <h3 className="card-title">Amir Khonsari</h3>
                <p className="card-text">
                  <strong>
                    Passionate about software engineering and problem-solving.
                  </strong>
                </p>
                <p className="card-text">
                  <strong>
                    Dedicated to learning and improving every day.
                  </strong>
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Amirhosseinmk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-2"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/amirhossein-mohammadian-khonsari-a3aab9325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        className="card mt-6 Center " 
        style={{ maxWidth: "800px", margin: "auto"}}
      >
        <div className="card-body Skills" >
          <h1 className="text-center mb-5">Skills</h1>
          <div className="column">
            <div className="col-md-6 mb-3">
              <h5>Python</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h5>C/C++</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h5>SQL</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h5>HTML/CSS</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

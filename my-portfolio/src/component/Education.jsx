import React from "react";
import { useParams } from "react-router-dom";

function Education() {
  const { field } = useParams();
  if (field === "software") {
    return (
      <div class="education" style={{ paddingBottom: "20px" }}>
        <div class="container mt-5">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="mb-4">Software Engineering</h1>
            </div>
            <div class="col-md-8 mx-auto">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="card-title">
                    Bachelor of Software Engineering (BSA) - Seneca College
                  </h3>
                  <p class="card-text mt-3">
                    I am currently in my <strong>second year</strong> of the{" "}
                    <strong>Bachelor of Software Engineering (BSA)</strong>{" "}
                    program at <strong>Seneca College with GPA 3.7</strong>.
                    This program has provided me with hands-on experience in
                    software development, systems analysis, and project
                    implementation.
                  </p>
                  <h4 class="mt-4">Courses and Skills</h4>
                  <p>
                    In my second year, I am exploring advanced topics,
                    including:
                  </p>
                  <ul>
                    <li>Operating Systems</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Artificial Intelligence (AI)</li>
                    <li>Software Development and Deployment</li>
                    <li>Object-Oriented Programming</li>
                    <li>Advanced Programming with C and C++</li>
                    <li>Database Design Principles</li>
                  </ul>
                  <p>
                    In the first year, I successfully completed foundational
                    courses that helped me build strong knowledge in:
                  </p>
                  <ul>
                    <li>HTML, CSS, and JavaScript</li>
                    <li>Django for web development</li>
                    <li>
                      Entity-Relationship Diagrams (ERD) and database design
                    </li>
                    <li>System design and analysis</li>
                  </ul>
                  <h4 class="mt-4">Projects and Experience</h4>
                  <p>
                    I have worked on various projects during my time in the
                    program, which include:
                  </p>
                  <ul>
                    <li>
                      Developing a <strong>Library Management System</strong>{" "}
                      using C
                    </li>
                    <li>
                      Building an{" "}
                      <strong>Automated Weather Station (AWS)</strong> using C++
                    </li>
                    <li>
                      Designing and implementing a{" "}
                      <strong>Backend for an E-commerce Application</strong>{" "}
                      with Python and Django
                    </li>
                    <li>
                      Creating this <strong>Portfolio Website</strong> using
                      HTML, CSS, and Django
                    </li>
                    <li>
                      Creating <strong>Secure File Sharing</strong> using
                      python, CSS, JavaScript and Django Framework
                    </li>
                  </ul>
                  <p>
                    These projects have helped me strengthen my programming
                    skills, including problem-solving, system design, and
                    backend development. I also gained practical experience
                    working with team collaboration tools like GitHub.
                  </p>
                  <h4 class="mt-4">Technical Skills</h4>
                  <ul>
                    <li>
                      <strong>Languages:</strong> C, C++, Python, JavaScript
                    </li>
                    <li>
                      <strong>Frameworks:</strong> Django
                    </li>
                    <li>
                      <strong>Web Development:</strong> HTML, CSS, JavaScript
                    </li>
                    <li>
                      <strong>Database:</strong> SQL, ERD design
                    </li>
                    <li>
                      <strong>Tools:</strong> Git/GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (field === "chemistry") {
    return (
      <div class="education" style={{marginBottom:"20px"}}>
        <div class="container mt-5">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="mb-4">Applied Chemistry</h1>
            </div>
            <div class="col-md-8 mx-auto">
              <div class="card shadow">
                <div class="card-body">
                  <h3 class="card-title">
                    Bachelor of Science in Applied Chemistry
                  </h3>
                  <p class="card-text mt-3">
                    I completed my{" "}
                    <strong>Bachelor of Science in Applied Chemistry</strong>{" "}
                    from{" "}
                    <strong>
                      Islamic Azad University, Tehran Medical Branch
                    </strong>
                    , in <strong>2019</strong>, with a GPA of{" "}
                    <strong>3.7/4.0</strong> (last two years:{" "}
                    <strong>3.97/4.0</strong>).
                  </p>
                  <h4 class="mt-4">Selected Courses</h4>
                  <ul>
                    <li>
                      Principle of Water &amp; Industrial Wastewater
                      Purification (4.0/4.0)
                    </li>
                    <li>
                      Principles &amp; Calculation in Industrial Chemistry
                      (4.0/4.0)
                    </li>
                    <li>Chemistry of Petroleum Technology (4.0/4.0)</li>
                    <li>Chemistry &amp; Technology of Leather (4.0/4.0)</li>
                    <li>Environmental Chemistry (4.0/4.0)</li>
                    <li>Organic Chemistry I, II, and III (4.0/4.0 each)</li>
                    <li>Physical Chemistry I and II (4.0/4.0 each)</li>
                    <li>Industrial Chemistry I and II (4.0/4.0 each)</li>
                    <li>Analytical Chemistry I and II (4.0/4.0 each)</li>
                  </ul>
                  <h4 class="mt-4">Laboratory Experience</h4>
                  <ul>
                    <li>
                      Worked with HPLC and GC devices at Shahid Beheshti
                      University.
                    </li>
                    <li>
                      Performed advanced lab techniques such as solvent
                      extraction, aspirin production, and distillation in
                      Organic &amp; Inorganic Labs.
                    </li>
                    <li>
                      Conducted vapor pressure and enthalpy experiments in
                      Physical Chemistry Labs.
                    </li>
                    <li>
                      Operated reactors and solid-liquid extraction units in
                      Industrial Chemistry Labs.
                    </li>
                    <li>
                      Analyzed moisture content and chemical compositions in
                      Analytical Chemistry Labs.
                    </li>
                  </ul>
                  <h4 class="mt-4">Academic Projects</h4>
                  <ul>
                    <li>
                      Researched the synthesis and functioning of
                      Chlordiazepoxide.
                    </li>
                    <li>
                      Worked on air quality criteria to capture carbon dioxide
                      and control CO2 emissions.
                    </li>
                    <li>
                      Investigated leather production and its maintenance
                      methods.
                    </li>
                  </ul>
                  <h4 class="mt-4">Workshops</h4>
                  <ul>
                    <li>
                      Introductory and Advanced Workshops on High-Performance
                      Liquid Chromatography (HPLC) at Shahid Beheshti
                      University.
                    </li>
                    <li>
                      Workshop on Petroleum Technology at Islamic Azad
                      University.
                    </li>
                    <li>
                      Workshop on Glass Blowing at Islamic Azad University.
                    </li>
                    <li>
                      Workshop on Shampoo Production at Oxin Novin Sharif
                      Institute.
                    </li>
                  </ul>
                  <h4 class="mt-4">Honors &amp; Achievements</h4>
                  <ul>
                    <li>
                      Ranked as the 10th top student among more than 100 Applied
                      Chemistry students.
                    </li>
                    <li>
                      Participated in the Chemistry Olympiad during high school.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

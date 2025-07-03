import React from "react";

function Footer() {
  return (
    <div
      class="card-footer bg-transparent text-center"
      style={{
        borderTop: "2px solid black", paddingBottom: "10px", fontSize: "larger",height:"100%"
      }}
    >
      <h2>Get In Touch</h2>
      <p>
        Currently seeking Software Engineering or Software Development <br />
        internship opportunities! Contact me at:
        <a href="mailto:amir-hossein@myseneca.ca" class="text-success">
          amir-hossein@myseneca.ca
        </a>
      </p>
    </div>
  );
}

export default Footer;

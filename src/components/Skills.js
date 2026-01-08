import React, { Component } from "react";

class Skills extends Component {
  sharedSkills = {
    icons: [
      {
        name: "HTML 5",
        class: "devicon-html5-plain",
        level: "95",
      },
      {
        name: "CSS 3",
        class: "devicon-css3-plain",
        level: "95",
      },
      {
        name: "React",
        class: "devicon-react-plain",
        level: "90",
      },
      {
        name: "React",
        class: "devicon-redux-original",
        level: "90",
      },
      {
        name: "TypeScript",
        class: "devicon-typescript-plain",
        level: "90",
      },
      {
        name: "JavaScript",
        class: "devicon-javascript-plain",
        level: "70",
      },
      {
        name: "Sass",
        class: "devicon-sass-original",
        level: "75",
      },
      {
        name: "Bootstrap",
        class: "devicon-bootstrap-plain",
        level: "85",
      },
      {
        name: "Tailwind",
        class: "devicon-tailwindcss-original",
        level: "75",
      },
      {
        name: "Material UI",
        class: "devicon-materialui-plain",
        level: "75",
      },
      {
        name: "Swagger",
        class: "devicon-swagger-plain",
        level: "85",
      },
      {
        name: "Axios",
        class: "devicon-axios-plain",
        level: "85",
      },

      {
        name: "Webpack",
        class: "devicon-webpack-plain",
        level: "85",
      },
      {
        name: "Git",
        class: "devicon-github-plain",
        level: "85",
      },
    ],
  };
  render() {
    var sectionName = "Skills";
    var skills = this.sharedSkills.icons.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

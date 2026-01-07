import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  experience = [
    {
      company: "FHK",
      title: "Senior Front-End Developer",
      years: "03.2023 - present",
      mainTech: ["ReactJs"],
      technologies: [
        "React JS",
        "REST API",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",

        "React Query",
        "Swagger",
        "Turbo Rep",
        "ShadCN UI",
        "Kendo react",
        "SignalR",
      ],
    },
    {
      company: "Roomy Technologies",
      title: "Software Engineer ||",
      years: "12.2021 - 03.2023",
      mainTech: ["React"],
      technologies: [
        "React JS",
        "REST API",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "Animated Carousals",
        "MUI",
        "Tailwind",
      ],
    },
  ];
  render() {
    var sectionName = "Experience";
    var work = this.experience.map(function (work, i) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <Badge pill className="main-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      var tech = technologies.map((technology, i) => {
        return (
          <Badge pill className="experience-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-react experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;

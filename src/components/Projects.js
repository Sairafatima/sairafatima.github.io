import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import projectImage from "../assets/images/project.jpg";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }
  resumeProjects = [
    {
      title: "ProCare",
      startDate: "2024",
      description:
        "A secure, role-based ticketing system that reduced incident resolution time by 20% through streamlined workflows",
      images: [projectImage],
      url: "https://fhk.cash/lynx/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "react",
        },
        {
          class: "devicon-javascript-plain",
          name: "Javascript",
        },
      ],
    },
    {
      title: "Customer Portal",
      startDate: "2023",
      description:
        "Real-time operational monitoring, increasing customer satisfaction and transparency by 30%",
      images: [projectImage],
      url: "https://fhk.cash/lynx/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "react",
        },
        {
          class: "devicon-javascript-plain",
          name: "Javascript",
        },
      ],
    },
    {
      title: "Cashmate",
      startDate: "2023",
      description:
        "Manage entire Cash Centers operation with visibility at each step on the day",
      images: [projectImage],
      url: "https://fhk.cash/lynx/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "react",
        },
        {
          class: "devicon-javascript-plain",
          name: "Javascript",
        },
      ],
    },
    {
      title: "Portfolio Management",
      startDate: "2023",
      description:
        "Role-based access to manage users, roles, cash centers, locations, vehicles, and other operational resources, improving administrative usability by 25%",
      images: [projectImage],
      url: "https://fhk.cash/lynx/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "react",
        },
        {
          class: "devicon-javascript-plain",
          name: "Javascript",
        },
      ],
    },
  ];
  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    var sectionName = "Projects";
    var projects = this.resumeProjects.map(function (projects) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={projects.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => detailsModalShow(projects)}>
              <div>
                <img
                  src={projects.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{projects.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{projects.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

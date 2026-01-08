import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import projectImage from "../assets/images/project.jpg";
import create_ticket from "../assets/images/procare/create.png";
import all_calls from "../assets/images/procare/all_calls.png";
import bulk_operations from "../assets/images/procare/bulk_operations.png";
import column_settings from "../assets/images/procare/column_settings.png";
import dynamic_filtering from "../assets/images/procare/dynamic_filtering.png";
import reports from "../assets/images/procare/reports.png";

import grid_view from "../assets/images/portfolio/grid_view.png";
import interactive_form from "../assets/images/portfolio/interactive_form.png";
import multi_step_form from "../assets/images/portfolio/multi_step_form.png";
import vehicle from "../assets/images/portfolio/vehicle.png";

import b2b_create from "../assets/images/cashmate/b2b_create.png";
import dashboard from "../assets/images/cashmate/dashboard.png";
import grid from "../assets/images/cashmate/grid.png";
import main from "../assets/images/cashmate/main.png";

import roomy1 from "../assets/images/roomy/1.png";
import roomy2 from "../assets/images/roomy/2.png";
import roomy3 from "../assets/images/roomy/3.png";
import roomy4 from "../assets/images/roomy/4.png";
import roomy5 from "../assets/images/roomy/5.png";
import roomy6 from "../assets/images/roomy/6.png";
import roomy7 from "../assets/images/roomy/7.png";
import roomy8 from "../assets/images/roomy/8.png";
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
        "A secure, role-based ticketing system that reduced incident resolution time by 20% through streamlined workflows.",
      list: [
        "Create and manage multiple ticket types with ease",
        "View, update, and download tickets, with dedicated list pages for specific ticket categories",
        "Perform bulk actions, including ticket creation and closure",
        "Apply dynamic filters on ticket lists across all fields, with the ability to save filters per user",
        "Customize ticket list views with dynamic column rendering and saved column order preferences",
        "Access a dedicated reports section to download a wide range of system reports",
      ],
      images: [
        create_ticket,
        all_calls,
        bulk_operations,
        dynamic_filtering,
        column_settings,
        reports,
      ],
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
      list: [
        "Handle all types of cash operations through a centralized cash center",
        "Monitor progress and perform necessary actions to complete operations efficiently",
        "Manage dispatch vehicles from a single control hub with end-to-end visibility",
        "View real-time operational metrics through a live, interactive dashboard",
      ],
      images: [main, dashboard, b2b_create, grid],
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
        "Role-based access to manage users, roles, cash centers, locations, vehicles, and other operational resources, improving administrative usability by 25%.",

      list: [
        "User-friendly, interactive forms with clear required-field indicators and real-time validation",
        "Editable grid views for fast and efficient resource management",
        "Multi-step form experiences that break down complex processes into manageable steps",
      ],
      images: [interactive_form, grid_view, multi_step_form, vehicle],
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
      title: "Roomy.pk",
      startDate: "2021",
      description:
        "A modern web platform for managing and showcasing a multi-property hotel management chain.",
      list: [
        "Visually engaging carousel designs featuring interactive cards for hotels and restaurants",
        "Dedicated pages for easy access to getaway details, packages, and booking information",
        "One-click room booking for a fast and seamless user experience",
      ],
      images: [roomy1, roomy2, roomy3, roomy4, roomy5],
      url: "https://roomy.pk/",
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
      title: "Roomy.io",
      startDate: "2021",
      description:
        "A sleek digital platform crafted to highlight Roomy’s products with clarity, elegance, and a user-centric design.",

      images: [roomy6, roomy7],
      url: "https://roomy.io/",
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
      title: "RMS",
      startDate: "2021",
      description:
        "A modern restaurant management system designed to handle all operational aspects, including inventory control, order management, and resource optimization.",
      images: [roomy8],
      url: "https://roomy.io/reservation-management-system",
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

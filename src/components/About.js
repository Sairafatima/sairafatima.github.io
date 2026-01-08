import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/javascript";
import nextIcon from "@iconify/icons-logos/nextjs";
import projectImage from "../assets/images/my_profile.jpg";
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = "About";
      var hello = "Hi";
      var about =
        "I’m a frontend developer with 4+ years of experience building scalable, user-focused web applications. I specialize in React, TypeScript, and modern frontend ecosystems, with a strong eye for design, performance, and accessibility. I enjoy crafting clean UI architectures, integrating APIs, and enhancing user experiences through thoughtful interactions and animations.";
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="200px"
                    width={"200px"}
                    style={{ objectFit: "cover" }}
                    src={projectImage}
                    alt="Avatar placeholder"
                  />

                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  {/* <Icon
                    icon={nextIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

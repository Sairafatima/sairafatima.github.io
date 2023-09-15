import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: "home" };
  }

  render() {
    return (
      <div className="parent-container">
        {/* <img
          alt={""}
          style={{
            position: "absolute",
            width: "100%",
            top: "0",
            left: 0,
            objectFit: "cover",
            height: "100%",
            opacity: 0.4,
          }}
          src={"/images/common/background.jpg"}
        /> */}
        <Header
          currentTab={this.state.currentTab}
          setTab={(tab) => {
            this.setState({ currentTab: tab });
          }}
        />
        <Content currentTab={this.state.currentTab} />
        <div className="credits-div">
          <a href={"https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"} target={"_blank"}>
            Designed by Beatrice Wambui Mbugua
          </a>
          <a href={"https://www.linkedin.com/in/saira-fatima-43622315a/"} target={"_blank"}>
            Developed by Saira Fatima
          </a>
        </div>
      </div>
    );
  }
}

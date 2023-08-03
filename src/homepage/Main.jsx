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
        <Header
          currentTab={this.state.currentTab}
          setTab={(tab) => {
            this.setState({ currentTab: tab });
          }}
        />
        <Content currentTab={this.state.currentTab} />
      </div>
    );
  }
}

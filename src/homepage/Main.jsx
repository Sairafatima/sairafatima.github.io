import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class Main extends Component {
  render() {
    return (
      <div className="parent-container">
        <Header />
        <Content />
      </div>
    );
  }
}

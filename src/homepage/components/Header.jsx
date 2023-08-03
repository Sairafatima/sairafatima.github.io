import React, { Component } from "react";
import "./styles.css";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let tabs = [
      { icon: "/images/header_icons/home.svg", active: "/images/header_icons/home_active.svg", heading: "Home", tab: "home" },
      {
        icon: "/images/header_icons/resume.svg",
        active: "/images/header_icons/resume_active.svg",
        heading: "Resume",
        tab: "resume",
      },
      { icon: "/images/header_icons/work.svg", active: "/images/header_icons/work_active.svg", heading: "Work", tab: "work" },
      {
        icon: "/images/header_icons/contact.svg",
        active: "/images/header_icons/contact_active.svg",
        heading: "Contact",
        tab: "contact",
      },
    ];
    return (
      <div className="header-main-container">
        <h1 className={"header-name"}>
          Saira &nbsp;<span className={"header-name-grad"}>Fatima</span>
        </h1>

        <div className="header-tabs">
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className="header-tab-div"
                style={
                  this.props.currentTab !== tab.tab
                    ? {
                        background: "#E1E8EF",
                      }
                    : {}
                }
                onClick={() => {
                  this.props.setTab(tab.tab);
                }}
              >
                <img className="header-tab-icon" src={this.props.currentTab !== tab.tab ? tab.icon : tab.active} alt={""} />
                <h1
                  className="header-tab-heading"
                  style={
                    this.props.currentTab === tab.tab
                      ? {
                          color: "#fff",
                        }
                      : {}
                  }
                >
                  {tab.heading}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

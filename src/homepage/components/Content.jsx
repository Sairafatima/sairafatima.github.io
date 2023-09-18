import { Component } from "react";
import ProfileData from "./ProfileData";
import SideProfile from "./SideProfile";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: "" };
  }

  componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  resizeHandler = () => {
    this.setState({ screenWidth: window.innerWidth });
  };
  render() {
    console.log("screenwidth", this.state.screenWidth);
    return (
      <div className="content-main-container">
        <SideProfile screenWidth={this.state.screenWidth} tab={this.props.currentTab} />
        {this.state.screenWidth > 575.98 ? (
          <ProfileData tab={this.props.currentTab} screenWidth={this.state.screenWidth} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Content;

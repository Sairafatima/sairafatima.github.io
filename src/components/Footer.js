import React, { Component } from "react";

class Footer extends Component {
  social = [
    {
      name: "github",
      url: "https://github.com/Sairafatima",
      class: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sairafatima-reactdeveloper/",
      class: "fab fa-linkedin",
    },
  ];
  render() {
    var networks = this.social.map(function (network) {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      );
    });

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; Saira Fatima</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

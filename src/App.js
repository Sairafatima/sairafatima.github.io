import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    // this.loadSharedData();
    // this.applyPickedLanguage(
    //   window.$primaryLanguage,
    //   window.$secondaryLanguageIconId
    // );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  Basic_info = {
    name: "Saira Fatima",
    titles: ["Frontend Developer", "React JS Developer"],
  };
  ResumeBasic_info = {
    section_name: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
  };
  SharedBasic_info = {
    image: "myProfile.jpg",
    about:
      "Innovative Frontend Developer with over four years of experience creating clean, interactive user interfaces. Experienced in working with APIs to build dynamic, data-driven features and connect frontend applications with backend services. Strong at applying modern design practices to improve user experience, performance, and responsiveness across devices. Focused on usability and accessibility to deliver simple, reliable, and inclusive web solutions.",
  };
  Projects = [
    {
      title: "Animal Shelter",
      startDate: "2020",
      description:
        "Najbardziej rozbudowana aplikacja nad którą miałam okazję pracować. Poznałam dużo technologii a mój kod by sprawdzany przez super opiekuna. Aplikacja obsługuje wszystkie procesy adopcji i pozwala na przechowywanie wszelkiej dokumentacji związanej z adopcją zwierząt ze schroniska.",
      images: [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg",
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
    {
      title: "Photography",
      startDate: "2018",
      description:
        "Osobisty projekt na przedmiot ze studiów. Byłam odpowiedzilna za testowanie aplikacji, która optymalizuje zdjęcia z pomocą popularnych algorytmów używanych przed edytory grafiki takie jak Pixlr czy Adobe Photoshop. Otrzymałam 5-tkę za projekt :)",
      images: [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-react-original",
          name: "React",
        },
        {
          class: "devicon-javascript-plain",
          name: "JavaScript",
        },
      ],
    },
    {
      title: "3D Object Viewer",
      startDate: "2015",
      description:
        "Jedna z pierwszych aplikacji nad którymi pracowałam na stażu. Musiałam przygotować front-end dla aplikacji, która pokazuje modele 3D znanych budynków. To był także mój pierwszy projekt w frameworku Angular. Dużo się nauczyłam!",
      images: [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
  ];
  render() {
    return (
      <div>
        <Header sharedData={this.Basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            // onClick={() =>
            //   this.applyPickedLanguage(
            //     window.$primaryLanguage,
            //     window.$secondaryLanguageIconId
            //   )
            // }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
            ></span>
          </div>
          {/* <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div> */}
        </div>
        <About
          resumeBasicInfo={this.ResumeBasic_info}
          sharedBasicInfo={this.SharedBasic_info}
        />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;

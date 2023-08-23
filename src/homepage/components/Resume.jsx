export default function Resume(props) {
  return (
    <div className="profile-data-container">
      <div className="custom-flex-row profile-data-header">
        <h1 className="profile-data-header-heading">RESUME</h1>
        <img className="profile-data-header-line" src={"/images/common/content_head_line.svg"} alt={""} />
      </div>
      <div className="resume-grid">
        <div className="custom-flex-row" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
          <img className="what-i-do-card-icon" src={"/images/resume/education.svg"} alt={""} />
          <h1 className="resume-grid-heading ">Education</h1>
        </div>
        <div className="custom-flex-row" style={{ gridColumnStart: 2, gridRowStart: 1 }}>
          <img className="what-i-do-card-icon" src={"/images/resume/exp.svg"} alt={""} />
          <h1 className="resume-grid-heading ">Experience</h1>
        </div>
        <div
          className="resume-grid-card custom-flex-column"
          style={{ justifyContent: "center", alignItems: "flex-start", gridColumnStart: 1, gridRowStart: 2 }}
        >
          <p className="resume-card-education" style={{ fontWeight: 400, opacity: 0.4 }}>
            2017-2021
          </p>
          <h1 className="resume-card-education">Bachelor in Software Engineering </h1>
          <h1 className="resume-card-education" style={{ fontWeight: 500 }}>
            National University of Sciences and Technology (NUST)
          </h1>
        </div>
        <div
          className="resume-grid-card custom-flex-column"
          style={{ justifyContent: "center", alignItems: "flex-start", gridColumnStart: 2, gridRowStart: 2 }}
        >
          <p className="resume-card-education" style={{ fontWeight: 400, opacity: 0.4 }}>
            Jan, 2023-Present
          </p>
          <h1 className="resume-card-education">Software Engineer || </h1>
          <h1 className="resume-card-education" style={{ fontWeight: 500 }}>
            Roomy Technologies, Islamabad
          </h1>
        </div>
        <div
          className="resume-grid-card custom-flex-column"
          style={{ justifyContent: "center", alignItems: "flex-start", gridColumnStart: 2, gridRowStart: 3 }}
        >
          <p className="resume-card-education" style={{ fontWeight: 400, opacity: 0.4 }}>
            Dec, 2021-Dec, 2022
          </p>
          <h1 className="resume-card-education">Software Engineer</h1>
          <h1 className="resume-card-education" style={{ fontWeight: 500 }}>
            Roomy Technologies, Islamabad
          </h1>
        </div>
        <div className="custom-flex-row mt-1" style={{ gridColumnStart: 1, gridRowStart: 4 }}>
          <h1 className="resume-grid-heading ">Work Skills</h1>
        </div>
        <div className="custom-flex-row mt-1" style={{ gridColumnStart: 2, gridRowStart: 4 }}>
          <h1 className="resume-grid-heading ">Soft Skills</h1>
        </div>
        <div className="custom-flex-row" style={{ gridColumnStart: 1, gridRowStart: 5, flexWrap: "wrap", gap: "0.6em" }}>
          {skills.work.map((skill, index) => {
            return (
              <div className="skill-label">
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
        <div className="custom-flex-row" style={{ gridColumnStart: 2, gridRowStart: 5, flexWrap: "wrap", gap: "0.6em" }}>
          {skills.soft.map((skill, index) => {
            return (
              <div className="skill-label">
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const skills = {
  soft: ["Time Management", "Flexibility"],
  work: ["react.js", "Javascript", "HTML5", "CSS", "Git"],
};

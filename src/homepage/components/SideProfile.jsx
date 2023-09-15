import { CONTACT_INFO, PERSONAL_INFO } from "./userContent";

function SideProfile(props) {
  return (
    <div className="side-profile-main-container">
      <h1 className="side-profile-name">{PERSONAL_INFO.name}</h1>
      <h1 className="side-profile-subtitle">{PERSONAL_INFO.designation}</h1>
      <div className="side-profile-icons-row">
        {CONTACT_INFO.linkedin ? (
          <a className="side-profile-icons-div" href={CONTACT_INFO.linkedin} target="_blank" title={"LinkedIn"}>
            <img src={"/images/social_icons/linkedin.svg"} alt={""} />
          </a>
        ) : (
          <></>
        )}
        {CONTACT_INFO.github ? (
          <a className="side-profile-icons-div" href={CONTACT_INFO.github} target="_blank" title={"GitHub"}>
            <img src={"/images/social_icons/github.svg"} alt={""} />
          </a>
        ) : (
          <></>
        )}
        {CONTACT_INFO.leetCode ? (
          <a className="side-profile-icons-div" href={CONTACT_INFO.leetCode} target="_blank" title={"LeetCode"}>
            <img src={"/images/social_icons/leetcode.svg"} alt={""} />
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="side-profile-info-card">
        {CONTACT_INFO.phone ? (
          <div className="side-profile-info-row-1">
            <div className="side-profile-info-row-img">
              <img src={"/images/social_icons/phone.svg"} alt={""} />
            </div>
            <div className="side-profile-info-row-2">
              <h1 className="side-profile-info-heading">Phone</h1>
              <p className="side-profile-info-sub"> {CONTACT_INFO.phone}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {CONTACT_INFO.email ? (
          <a className="side-profile-info-row-1" href="mailto: saira@gmail.com">
            <div className="side-profile-info-row-img">
              <img src={"/images/social_icons/email.svg"} alt={""} />
            </div>
            <div className="side-profile-info-row-2">
              <h1 className="side-profile-info-heading">Email</h1>
              <p className="side-profile-info-sub"> {CONTACT_INFO.email}</p>
            </div>
          </a>
        ) : (
          <></>
        )}
        {CONTACT_INFO.location ? (
          <div className="side-profile-info-row-1">
            <div className="side-profile-info-row-img">
              <img src={"/images/social_icons/location.svg"} alt={""} />
            </div>
            <div className="side-profile-info-row-2">
              <h1 className="side-profile-info-heading">Location</h1>
              <p className="side-profile-info-sub"> {CONTACT_INFO.location}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        <a href="/docs/saira_cv.docx" download className="download-resume-button">
          <img className="download-img" src={"/images/social_icons/download.svg"} alt={""} />
          <p>Download Resume</p>
        </a>
      </div>
    </div>
  );
}
export default SideProfile;

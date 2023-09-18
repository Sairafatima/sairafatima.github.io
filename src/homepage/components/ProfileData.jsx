import Contact from "./Contact";
import Home from "./Home";
import Resume from "./Resume";
import Work from "./Work";

function ProfileData(props) {
  return (
    <>
      <div className="profile-data-card">
        {props.tab === "home" && <Home />}
        {props.tab === "resume" && <Resume />}
        {props.tab === "work" && <Work />}
        {props.tab === "contact" && <Contact />}
      </div>
    </>
  );
}

export default ProfileData;

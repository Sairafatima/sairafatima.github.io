import ProfileData from "./ProfileData";
import SideProfile from "./SideProfile";

function Content(props) {
  return (
    <div className="content-main-container">
      <SideProfile />
      <ProfileData />
    </div>
  );
}

export default Content;

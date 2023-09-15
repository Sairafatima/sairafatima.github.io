import ProfileData from "./ProfileData";
import SideProfile from "./SideProfile";

function Content(props) {
  return (
    <div className="content-main-container">
      <SideProfile />
      <ProfileData tab={props.currentTab} />
      <div className="credits-div">
        <p>Design Template :&nbsp;</p>
        <a href={"https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"} target={"_blank"}>
          By Beatrice Wambui Mbugua
        </a>
      </div>
    </div>
  );
}

export default Content;

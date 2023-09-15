function Work(props) {
  return (
    <div className="profile-data-container">
      <div className="custom-flex-row profile-data-header" style={{ marginBottom: "1em" }}>
        <h1 className="profile-data-header-heading">PORTFOLIO</h1>
        <img className="profile-data-header-line" src={"/images/common/content_head_line.svg"} alt={""} />
      </div>
      {whatIDo.map((card, cIdex) => {
        return (
          <div className="custom-flex-row what-i-do-card-gap" key={cIdex}>
            {card.map((data, dIndex) => {
              return (
                <div
                  key={dIndex}
                  className="what-i-do-card"
                  style={{ background: data.background, marginLeft: dIndex === 0 ? 0 : "", marginTop: cIdex === 0 ? 0 : "" }}
                >
                  <div className="custom-flex-row">
                    {data.icon ? <img className="what-i-do-card-icon" src={data.icon} alt={""} /> : <></>}

                    <h className="what-i-do-card-heading">{data.heading}</h>
                  </div>
                  <p className="what-i-do-card-content">{data.content}</p>

                  <a
                    className="what-i-do-card-content"
                    href={data.link}
                    style={{ textDecoration: "underline" }}
                    target={"_blank"}
                  >
                    {data.link}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Work;

const whatIDo = [
  [
    {
      background: "#FFEBD1",
      link: "https://roomy.io/property-management-system",
      heading: "Property Management System",
      content:
        "A cloud-based, integrated platform that integrates operations, accelerates revenue growth and provides outstanding guest experiences.",
    },
    {
      background: "#F2F7FC",
      link: "https://roomy.io/restaurant-management-system",
      heading: "Restaurant Management System",
      content:
        "The cloud-based restaurant management system will assist you in streamlining your offerings while focusing on guest satisfaction.",
    },
  ],
  [
    {
      background: "#F2F7FC",
      link: "https://roomy.pk/",
      heading: "Booking Engine",
      content:
        "Boost direct reservations by providing a booking system that encourages recurring business by boosting guests’ confidence when making direct reservations with your hotel.",
    },
    {
      background: "#FFEBD1",
      link: "https://roomy.io/channel-manager",
      heading: "Channel Manager",
      content:
        "Using the powerful channel manager provided by Roomy, you can take control and visibility over your hotel’s online points of sale.",
    },
  ],
];

function Work(props) {
  return (
    <div className="profile-data-container">
      <div className="custom-flex-row profile-data-header" style={{ marginBottom: "1em" }}>
        <h1 className="profile-data-header-heading">PORTFOLIO</h1>
        <img className="profile-data-header-line" src={"/images/common/content_head_line.svg"} alt={""} />
      </div>
      {whatIDo.map((card, cIndex) => {
        return (
          <div className="custom-flex-row what-i-do-card-gap" key={cIndex} style={{ width: "100%" }}>
            {card.map((data, dIndex) => {
              return (
                <a
                  href={data.link}
                  key={dIndex}
                  target={"_blank"}
                  className="what-i-do-card"
                  style={{
                    background: data.background,
                    marginLeft: dIndex === 0 ? 0 : "",
                    marginTop: dIndex === 0 ? 0 : "",
                    cursor: "pointer",
                    height: "unset",
                    borderRadius: "8px",
                  }}
                >
                  <img src={data.img} className="p-work-image" alt={""} />

                  <p className="resume-card-education" style={{ fontWeight: 400, opacity: 0.4 }}>
                    {data.type}
                  </p>
                  <h1 className="resume-card-education" style={{ marginTop: 0 }}>
                    {data.heading}
                  </h1>
                </a>
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
      type: "Development",
      img: "/images/portfolio/pms.jpg",
    },
    {
      background: "#F2F7FC",
      link: "https://roomy.io/restaurant-management-system",
      heading: "Restaurant Management System",
      type: "Development",
      img: "/images/portfolio/rms.jpg",
    },
  ],
  [
    {
      background: "#F2F7FC",
      link: "https://roomy.pk/",
      heading: "Booking Engine",
      type: "Development",
      img: "/images/portfolio/booking_engine.jpg",
    },
    {
      background: "#FFEBD1",
      link: "https://roomy.io/channel-manager",
      heading: "Channel Manager",
      type: "Development",
      img: "/images/portfolio/channel_manager.jpg",
    },
  ],
];

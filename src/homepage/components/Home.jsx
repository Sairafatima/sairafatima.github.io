function Home(props) {
  return (
    <div className="profile-data-container">
      <div className="custom-flex-row profile-data-header">
        <h1 className="profile-data-header-heading">ABOUT ME</h1>
        <img className="profile-data-header-line" src={"/images/common/content_head_line.svg"} alt={""} />
      </div>
      <p className="profile-data-about-us">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen
        interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing
        short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.
      </p>
      <h1 className="profile-data-what-i-do">What I do!</h1>
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
                    <img className="what-i-do-card-icon" src={data.icon} alt={""} />
                    <h1 className="what-i-do-card-heading">{data.heading}</h1>
                  </div>
                  <p className="what-i-do-card-content">{data.content}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Home;
const whatIDo = [
  [
    {
      background: "#FFEBD1",
      icon: "/images/home/code.svg",
      heading: "Web Development",
      content:
        "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
    {
      background: "#F2F7FC",
      icon: "/images/home/mentor.svg",
      heading: "Mentorship",
      content:
        "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.",
    },
  ],
];

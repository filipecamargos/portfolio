import cssClasses from "./Sidebar.module.css";

const Sidebar = (props) => {
  //Portfolio information
  const name = "Filipe Ferreira";
  const linkedin = "https://www.linkedin.com/in/filipe-ferreira-eng/";
  const github = "https://github.com/filipecamargos";
  const facebook = "https://www.facebook.com/filipe.camargos.902/";
  const email = "mailto: filipe.atrabalho@gmail.com";

  //Hashtags Interests
  const interests = ["#Software_Engineering", "#Learning", "#Coding"].map(
    (el, i) => {
      return (
        <div key={i} className={cssClasses.hashTag}>
          {el}
        </div>
      );
    }
  );

  //Deterime if we are not home so the bar show in full at home page and not at the contents
  let sideNavBehave = cssClasses.sidenav;
  if (props.contentDisplay !== "Home") {
    sideNavBehave = cssClasses.sidenavNotHome;
  }

  //Nav Bar
  return (
    <div className={sideNavBehave + " animate__slideInLeft"}>
      <img src="/profile.jpg" alt="profile" />
      <h1>{name}</h1>
      <div className={cssClasses.links}>
        <a href="#about" onClick={props.onHomeClick}>
          Home
        </a>
        <a href="#about" onClick={props.onAboutClick}>
          About
        </a>
        <a href="#project" onClick={props.onProjectClick}>
          Projects
        </a>
        <a href="#experience" onClick={props.onExperienceClick}>
          Experience
        </a>
      </div>
      <div className={cssClasses.icons}>
        <div>
          <a href={linkedin}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={github}>
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div>
          <a
            href={email}
            target="_blank"
            rel="noreferrer"
            className={cssClasses.env}
          >
            <i className="fa fa-envelope"></i>
          </a>
          <a href={facebook}>
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className={cssClasses.interests}>{interests}</div>
    </div>
  );
};

export default Sidebar;

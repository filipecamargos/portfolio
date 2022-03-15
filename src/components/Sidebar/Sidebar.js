import cssClasses from "./Sidebar.module.css";

const Sidebar = () => {
  const name = "Filipe Ferreira";
  const linkedin = "https://www.linkedin.com/in/filipe-ferreira-eng/";
  const github = "https://github.com/filipecamargos";
  const facebook = "https://www.facebook.com/filipe.camargos.902/";
  const email = "mailto: filipe.atrabalho@gmail.com";

  const interests = ["#Software_Engineering", "#Learning", "#Coding"].map(
    (el, i) => {
      return (
        <div key={i} className={cssClasses.hashTag}>
          {el}
        </div>
      );
    }
  );

  return (
    <div className={cssClasses.sidenav}>
      <img src="/profile.jpg" alt="profile" />
      <h1>{name}</h1>
      <div className={cssClasses.links}>
        <a href="#about">About</a>
        <a href="#services">Projects</a>
        <a href="#clients">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={cssClasses.icons}>
        <div>
          <a href={linkedin}>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href={github}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      <div>
      <a href={email} target="_blank">
          <i className="fa fa-envelope"></i>
        </a>
        <a href={facebook}>
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>

      </div>
      <div className={cssClasses.interests}>{interests}</div>
    </div>
  );
};

export default Sidebar;

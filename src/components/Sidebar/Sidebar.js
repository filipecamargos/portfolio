import cssClasses from "./Sidebar.module.css";

const Sidebar = () => {
  const name = "Filipe Ferreira";
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
        <a href="#about"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#services"><i class="fa-brands fa-github"></i></a>
        <a href="#services"><i class="fa fa-envelope"></i></a>
        <a href="#services"><i class="fa-brands fa-facebook"></i></a>
      </div>
      <div className={cssClasses.interests}>{interests}</div>
    </div>
  );
};

export default Sidebar;

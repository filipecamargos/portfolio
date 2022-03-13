import cssClasses from "./Sidebar.module.css";
import ProfilePic from "../ProfilePic/ProfilePic";

const Sidebar = () => {
  return (
    <div className={cssClasses.sidenav}>
      <ProfilePic />
      <a href="#about">About</a>
      <a href="#services">Projects</a>
      <a href="#clients">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Sidebar;

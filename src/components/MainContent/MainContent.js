import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

const MainContent = (props) => {
  let pageContent = <Home />;

  //Switch between the content to dysplay
  switch (props.contentDisplay) {
    case "About":
      pageContent = <About />;
      break;
    case "Projects":
      pageContent = <Projects />;
      break;
    case "Experience":
      pageContent = <Experience />;
      break;
    case "Contact":
      pageContent = <Contact />;
      break;
    default:
      break;
  }

  return <>{pageContent}</>;
};

export default MainContent;

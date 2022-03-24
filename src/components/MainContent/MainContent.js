import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";

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
    default:
      break;
  }

  return <>{pageContent}</>;
};

export default MainContent;

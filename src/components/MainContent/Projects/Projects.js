import cssClassesExp from "../Experience/Experience.module.css";
import cssClasses from "./Projects.module.css";

const Projects = () => {

  const projectList = [
    {
      img: "\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      img: "\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      img: "\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      img: "\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      img: "\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    
  ].map((proj, key) => {
    return (<div className={cssClassesExp.experienceInfo + " " + cssClasses.project} key={key}>
      <img src={proj.img} alt="Sloop"/>
      <p>{proj.title}</p>
      <p>{proj.description}</p>
      <p>{proj.stack}</p>
      <p>{proj.data}</p>
      <p><a href={proj.gitHub}>{proj.gitHub}</a></p>
      <hr />
    </div>)
  });

  return (
    <div className={cssClassesExp.experienceContent}>
      <h1 className="animate__slideInLeft"><i class="fa fa-file-code-o" aria-hidden="true"></i> My Projects</h1>
      <section className={cssClassesExp.experienceSection + " animate__fadeIn"} >
        {projectList}
      </section>
    </div>
  );
};

export default Projects;
import cssClassesExp from "../Experience/Experience.module.css";
import cssClasses from "./Projects.module.css";

const Projects = () => {

  const projectList = [
    {
      data: 'Apr 2022',
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      data: 'Apr 2022',
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    {
      data: 'Apr 2022',
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB, Heroku',
      gitHub: 'https://intermountainhealthcare.org/'
    },
    
  ].map((exp, key) => {
    return (<div className={cssClassesExp.experienceInfo} key={key}>
      <p><b>{exp.position}</b></p>
      <a href={exp.companySite}><i>{exp.company}</i></a>
      <p>{exp.data}</p>
      <hr />
    </div>)
  });

  return (
    <div className={cssClassesExp.experienceContent}>
      <h1 className="animate__slideInLeft"><i className="fa fa-briefcase" aria-hidden="true"></i> Experience</h1>
      <section className={cssClassesExp.experienceSection + " animate__fadeIn"} >
        {projectList}
      </section>
    </div>
  );
};

export default Projects;
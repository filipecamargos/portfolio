import cssClassesExp from "../Experience/Experience.module.css";
import cssClasses from "./Projects.module.css";

const Projects = () => {

  const projectList = [
    {
      img: "\\sloop.png",
      title: 'Sloop: Team Management Feedback',
      description: 'Sloop App is an application that allow management to manage their teams and provide feeback.',
      stack: 'HTML, CSS, JS, NodeJS, MongoDB',
      gitHub: 'https://github.com/filipecamargos/Sloop-1.0-Employee-Management'
    },
    {
      img: "\\homeOfficePost.png",
      title: 'Home Office Post',
      description: 'Home Office Post is a web application that allows users to create an account and find and save remote jobs.',
      stack: 'HTML, CSS, JS, JQuery, NodeJs, MongoDB',
      gitHub: 'https://github.com/filipecamargos/NodeJS-Full-Stack-Home-Office-Post'
    },
    {
      img: "\\restaurant.png",
      title: 'BYU-I Trust Eat',
      description: 'Frontend App developed with two other students to allow search for restaurants near to our school, check their reviews, and filter based on preferences.',
      stack: 'ReactJS',
      gitHub: 'https://github.com/filipecamargos/Trust-Eat'
    },
    {
      img: "\\portfolio.png",
      title: 'Portfolio',
      description: 'This portfolio was designed to tell a little bit about myself some of the experiences I\'ve gained so far.',
      stack: 'ReactJS',
      gitHub: 'https://github.com/filipecamargos/portfolio'
    },
    {
      img: "\\apicsharp.png",
      title: 'Meeting Planner API',
      description: 'API server built with .NET Core to provide the proper CRUD operations for a meeting planning app.',
      stack: 'C#, .Net',
      gitHub: 'https://github.com/filipecamargos/.NET-Meeting-Planner-API'
    },
    {
      img: "\\javaApp.png",
      title: 'Flashify',
      description: 'Flashify is a Android App developed in Java with two other devs that allow users to create and orginize flash cards.',
      stack: 'Java',
      gitHub: 'https://github.com/filipecamargos/Flashify'
    },
    {
      img: "\\db.png",
      title: 'School DB',
      description: 'MySQL DB containing 10+ tables. It demonstrate how to CREATE, READ, UPDATE, and DELETE its data using SQL statements',
      stack: 'MySQL || SQL',
      gitHub: 'https://github.com/filipecamargos/MySQL-School-Database'
    },
    {
      img: "\\github.png",
      title: 'My Github',
      description: 'On my GitHub can be found +60 repositories wit several projects, contributions, tutorials, and learning tracking repos.',
      stack: 'OOP, DS, Algorithms, Full Stack, Database',
      gitHub: 'https://github.com/filipecamargos/MySQL-School-Database'
    },

  ].map((proj, key) => {
    return (<div className={cssClassesExp.experienceInfo + " " + cssClasses.project} key={key}>
      <hr />
      <img src={proj.img} alt="Sloop"/>
      <p>{proj.title}</p>
      <p>{proj.description}</p>
      <p>{proj.stack}</p>
      <p>{proj.data}</p>
      <p><a href={proj.gitHub}>{proj.gitHub}</a></p>
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
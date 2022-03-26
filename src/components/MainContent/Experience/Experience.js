import cssClasses from "./Experience.module.css";

const Experience = () => {
  //List of Experiences
  const experienceList = [
    {
      data: 'Apr 2022 - Aug 2022',
      position: 'Software Engineer Intern',
      company: 'Intermountain Health Care',
      companySite: 'https://intermountainhealthcare.org/'
    },
    {
      data: 'Jan 2022 - Apr 2022',
      position: 'Software Engineer Intern',
      company: 'FamilySearch',
      companySite: 'https://www.familysearch.org/en/'
    },
    {
      data: 'Sep 2021 - Jan 2022',
      position: 'Software Developer',
      company: 'Research and Business Development Center',
      companySite: 'https://www.rbdcenter.org/'
    },
    {
      data: 'May 2021 - Sep 2021',
      position: 'Software Engineer Intern',
      company: 'Ancestry',
      companySite: 'https://www.ancestry.com/'
    },
    {
      data: 'Aug 2020 - Dec 2020',
      position: 'Software QA Engineer Intern',
      company: 'The Church of Jesus Christ of Latter-day Saints',
      companySite: 'https://www.churchofjesuschrist.org/?lang=eng'
    },
  ].map((exp, key) => {
    return (<div className={cssClasses.experienceInfo} key={key}>
      <p><b>{exp.position}</b></p>
      <a href={exp.companySite}><i>{exp.company}</i></a>
      <p>{exp.data}</p>
      <hr />
    </div>)
  });

  return (
    <div className={cssClasses.experienceContent}>
      <h1 className="animate__slideInLeft"><i className="fa fa-briefcase" aria-hidden="true"></i> Experience</h1>
      <section className={cssClasses.experienceSection + " animate__fadeIn"} >
        {experienceList}
      </section>
      <h1 className="animate__slideInLeft"><i className="fa fa-code" aria-hidden="true"></i> Skills</h1>
      <section className={cssClasses.certifications + " animate__fadeIn"}>
        <img src="/html.png" alt="HTML Icon" />
        <img src="/CSS.png" alt="CSS Icon" />
        <img src="/js.png" alt="JS Icon" />
        <img src="/react.png" alt="React Icon" />
        <img src="/node.png" alt="Node Icon" />
        <img src="/java.png" alt="Java Icon" />
        <img src="/python.png" alt="python Icon" />
        <img src="/mongo.png" alt="mongo Icon" />
        <img src="/SQL.png" alt="SQL icon" />
      </section>
      <h1 className="animate__slideInLeft"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Education</h1>
      <section className={cssClasses.experienceSection + " animate__fadeIn"} >
        <div className={cssClasses.experienceInfo + " " + cssClasses.education}>
          <a href='/'><i>Brigham Young University - Idaho</i></a>
          <p><b>Bachelor of Science in Software Engineering | GPA: 3.9 | 2022</b></p>
          <p>Minor in Computer Information Technology</p>
          <p>• Mentored new students in the Heber J. Grant Mentor Program</p>
          <p>• Participated as a member of the Association for Computing Machinery BYU-Idaho Chapter</p>
          <p>• Academic awarded: Thomas E. Ricks Scholarship 2019 | 2020</p>
        </div>
      </section>
      <h1 className="animate__slideInLeft"><i className="fa fa-certificate" aria-hidden="true"></i> Certifications</h1>
      <section className={cssClasses.certifications + " animate__fadeIn"}>
        <img src="/aws.png" alt="AWS Badge" />
        <img src="/Badges_v8-07_Practitioner.png" alt="IBM Badge" />
        <img src="/Team_Essentials.png" alt="IBM Badge" />
      </section>
      <section className={cssClasses.resume + " animate__fadeIn"}>
        <a href="/" download><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Resume</a>
      </section>
    </div>
  );
};

export default Experience;
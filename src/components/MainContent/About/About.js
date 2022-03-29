import cssClasses from "./About.module.css";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className={cssClasses.aboutContent}>
      <div className={cssClasses.aboutMe + " animate__fadeIn"}>
        <div className={cssClasses.aboutMeText}>
          <h1>Hi There!</h1>
          <p>
            I'm Filipe. I'm a Software Engineer, but you can know all about my
            education, skills, and experience by checking the rest of my
            portfolio. Here I want to give some insights about who I am.
          </p>
          <p>
            Born and raised in Brazil, I came to the US in my early 20s. My
            first language is Portuguese, but I taught myself Spanish growing up
            and English later on.
          </p>
          <p>
            When I'm not working on some personal projects or studying you can
            find me at the gym lifting some weights, reading a book, enjoying a
            conversation, or playing a game.
          </p>
          <p>
            Aside from being a Geek, I enjoy traveling, cultures, dancing,
            Indian food, self-motivation books, international relations,
            history, and nature.
          </p>
          <br />
          <hr />
          <br />
        </div>
        <div className={cssClasses.aboutContentBottom}>
          <img src="/aboutMe1.JPEG" alt="About Me" />
          <img src="/aboutMe2.JPEG" alt="About Me" />
          <img src="/aboutMe3.jpg" alt="About Me" />
          <img src="/aboutMe4.jpg" alt="About Me" />
        </div>
      </div>
      <div className={cssClasses.imgContent + " animate__slideInRight"}>
        <img src="/aboutMe.png" alt="About Me" />
      </div>
    </div>
  );
};

export default About;

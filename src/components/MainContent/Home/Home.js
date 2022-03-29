import "./Home.scss";

const Home = () => {
  window.scrollTo(0, 0);
  
  return (
    <div className="home animate__fadeIn">
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Hello</p>
          <ul className="content__container__list">
            <li className="content__container__list__item">World!</li>
            <li className="content__container__list__item">You!</li>
            <li className="content__container__list__item">Everybody!</li>
            <li className="content__container__list__item">and Welcome!</li>
          </ul>
        </div>
        <p className="home_message">
          <span className="span_title">My name is Filipe!</span>
          <br></br>Thank you for visinting my portfolio.
          <br></br>I hope you can find what you are looking for!
        </p>
      </div>
    </div>
  );
};

export default Home;

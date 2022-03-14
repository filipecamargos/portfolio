import "./MainContent.scss";

const MainContent = () => {
  return (
    <div>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Hello</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">World !</li>
            <li className="content__container__list__item">You !</li>
            <li className="content__container__list__item">Everybody !</li>
            <li className="content__container__list__item">and Welcome!</li>
          </ul>
        </div>
      </div>
      <p>
        Investment products and services are offered through Wells Fargo
        Advisors.
      </p>
    </div>
  );
};

export default MainContent;

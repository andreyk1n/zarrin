import "./Content.css";
import about from "../../assets/images/about-us.jpg";
const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content__container">
          <span className="content__label">ABOUT US</span>
          <h1 className="content__title">
            Creative Blog Writting and publishing site
          </h1>
          <p className="content__text">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <img
            src={about}
            alt="Creative Blog Writting and publishing site"
            className="content__img"
          />
        </div>
      </div>
    </>
  );
};

export default Content;

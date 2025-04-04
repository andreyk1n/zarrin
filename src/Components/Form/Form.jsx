import "./Form.css";
import map from "../../assets/images/map.jpg"; // Виправив розширення

const Form = () => {
  return (
    <div className="form">
      <div className="form__background">
        <img src={map} alt="Map image" className="form__image" draggable='false' />
      </div>
      <div className="form__container">
        <form className="form__form">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Name" />
            <input type="email" className="form__input" placeholder="Email" />
          </div>
          <div className="form__group">
            <input type="tel" className="form__input" placeholder="Phone" />
            <input type="text" className="form__input" placeholder="Subject" />
          </div>
          <textarea className="form__textarea" placeholder="Message"></textarea>
          <button type="submit" className="form__button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

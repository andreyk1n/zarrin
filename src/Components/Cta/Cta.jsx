import './Cta.css'

const Cta = () => {
  return (
    <>
      <div className="cta">
        <div className="cta__container">
            <h2 className="cta__title">Get our stories delivered From us to your inbox weekly.</h2>
            <form className='cta__form' action="POST">
                <input type="text" className="cta__input" placeholder="Your Email" />
                <button className="cta__button">Get started</button>
            </form>
            <p className="cta__text">Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
        </div>
      </div>
    </>
  );
};

export default Cta;

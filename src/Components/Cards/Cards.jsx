import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <h1>Get in Touch</h1>
          <p>
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </p>
          <div className="cards__items">
            <div className="cards__item">
              <div className="cards__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 20.0002V12.1741C22.0001 11.6297 21.889 11.0909 21.6735 10.5909C21.458 10.0909 21.1428 9.64007 20.747 9.26615L13.374 2.29815C13.0027 1.94708 12.511 1.75146 12 1.75146C11.489 1.75146 10.9973 1.94708 10.626 2.29815L3.253 9.26615C2.85722 9.64007 2.54195 10.0909 2.3265 10.5909C2.11104 11.0909 1.99994 11.6297 2 12.1741V20.0002C2 20.5306 2.21071 21.0393 2.58579 21.4144C2.96086 21.7894 3.46957 22.0002 4 22.0002H20C20.5304 22.0002 21.0391 21.7894 21.4142 21.4144C21.7893 21.0393 22 20.5306 22 20.0002Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="cards__title">Office</span>
              <a className="cards__link" href="#">
                Victoria Street, London, UK
              </a>
            </div>

            <div className="cards__item">
              <div className="cards__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 8L9.501 14.001C10.2103 14.5685 11.0916 14.8777 12 14.8777C12.9084 14.8777 13.7897 14.5685 14.499 14.001L22 8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="cards__title">Email</span>
              <a className="cards__link" href="mailto:hello@zarrin.com">
                hello@zarrin.com
              </a>
            </div>

            <div className="cards__item">
              <div className="cards__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.554 6.24003L7.17099 2.33503C6.78099 1.88503 6.06599 1.88703 5.61299 2.34103L2.83099 5.12803C2.00299 5.95703 1.76599 7.18803 2.24499 8.17503C5.10661 14.1 9.88503 18.8851 15.806 21.755C16.792 22.234 18.022 21.997 18.85 21.168L21.658 18.355C22.113 17.9 22.114 17.181 21.66 16.791L17.74 13.426C17.33 13.074 16.693 13.12 16.282 13.532L14.918 14.898C14.8482 14.9712 14.7562 15.0195 14.6563 15.0354C14.5564 15.0513 14.4541 15.0339 14.365 14.986C12.1354 13.7021 10.286 11.8503 9.00499 9.61903C8.95702 9.52978 8.93964 9.42726 8.95554 9.32719C8.97144 9.22711 9.01972 9.13502 9.09299 9.06503L10.453 7.70403C10.865 7.29003 10.91 6.65003 10.554 6.23903V6.24003Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="cards__title">Phone</span>
              <a className="cards__link" href="tel:00000000000">
                (000) 0000 0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

import { Carousel } from "bootstrap";
import { useEffect } from "react";

import myPhoto from "../../../../images/myphoto.jpeg";
import urban from "../../../../images/urban.png";

export default function Portfolio() {
  useEffect(() => {
    new Carousel("#carouselPortfolio");
  });

  return (
    <section id="portfolio">
      <div className="container pb-5 pt-5" data-anime='left'>
        <h2 className="pb-4">Portfólio</h2>
        <div
          id="carouselPortfolio"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={urban} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p></p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src={urban} className="d-block w-100 img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselPortfolio"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselPortfolio"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

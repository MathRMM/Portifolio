import { Carousel } from "bootstrap";
import { useEffect } from "react";

import urban from "../../../../images/Frame.png";

export default function Portfolio() {
  useEffect(() => {
    new Carousel("#carouselPortfolio");
  });

  function redirectToLink(link){
    window.open(link, "_blank")
  }

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
            <div className="carousel-item active" data-bs-interval="10000" onClick={()=> redirectToLink("https://urbanskateshop.vercel.app/")}>
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={urban} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                <h3> Urban Skate Shop</h3>
                  <p>Trazendo a indentidade que envolve o skate, a loja foi toda planejada para trazer novas
                    peças e roupas para extrair o maximo das manobras com estilo. 
                  </p>

                  <p>
                  O site nasce com o React
                    como base para seu Front-End, trazendo um design todo original. Com ele vem um Back-End responsavel
                    pela toda regra de negocio e armazenamento de produtos e compras.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={urban} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                  <h3> Urban Skate Shop</h3>
                  <p>Trazendo a indentidade que envolve o skate, a loja foi toda planejada para trazer novas
                    peças e roupas para extrair o maximo das manobras com estilo. 
                  </p>

                  <p>
                  O site nasce com o React
                    como base para seu Front-End, trazendo um design todo original. Com ele vem um Back-End responsavel
                    pela toda regra de negocio e armazenamento de produtos e compras.
                  </p>
                </div>
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

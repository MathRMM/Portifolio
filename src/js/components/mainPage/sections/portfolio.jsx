import { Carousel } from "bootstrap";
import { useEffect } from "react";

import urban from "../../../../images/Urban.png";
import MyWallet from "../../../../images/MyWallet.png";
import linkr from "../../../../images/linkr.png";
import chatUol from "../../../../images/chatUol.png"

export default function Portfolio() {
  useEffect(() => {
    new Carousel("#carouselPortfolio");
  });

  function redirectToLink(link) {
    window.open(link, "_blank");
  }

  return (
    <section id="portfolio">
      <div className="container pb-5 pt-5" data-anime="left">
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
            <button
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="20000"
              onClick={() =>
                redirectToLink("https://urbanskateshop.vercel.app/")
              }
            >
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={urban} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                  <h2 className="mb-4"> Urban Skate Shop</h2>
                  <p>
                    Trazendo a indentidade que envolve o skate, a loja foi toda
                    planejada para trazer novas peças e roupas para extrair o
                    maximo das manobras com estilo.
                  </p>

                  <p>
                    O site nasce com o React como base para seu Front-End,
                    trazendo um design todo original. Com ele vem uma função
                    aprendida "useRef" para criar um carrosel de imagem no topo
                    do site principal e um NavBar interativo com o scroll.
                  </p>

                  <p>
                    Esse foi o primeiro projeto grande na qual apliquei o
                    Back-End. Aprendi a sua responsabilidade pela regra de
                    negócio e armazenamento de dados. Para armazenar os produtos
                    e o histórico de compras foi usado um banco de dados MongoDb
                    (noSql).
                  </p>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              data-bs-interval="20000"
              onClick={() =>
                redirectToLink(
                  "https://t7-projeto13-my-wallet-front-end.vercel.app"
                )
              }
            >
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={MyWallet} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                  <h2 className="mb-4"> MyWallet </h2>
                  <p>
                    Através de uma necessidade de controle financeiro, o
                    MyWallet surgiu. Nele você consegue colocar tudo que entra e
                    foge do seu bolso e sempre saber quanto ainda te resta.
                  </p>

                  <p>
                  Esse site foi o primeiro a ser implementado um sistema de
                    usuário. Contendo cadastro, login, sessão e informações
                    privadas que somente quem possui a conta consegue ver.
                  </p>

                  <p>
                    Para o seu Back-End fui todo estruturado com express, sendo
                    usado MongoDb para armazenar suas informações.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="carousel-item"
              data-bs-interval="20000"
              onClick={() => redirectToLink("https://linkr-rouge.vercel.app")}
            >
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={linkr} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                  <h2 className="mb-4"> Linkr </h2>
                  <p>
                    Uma rede social com tem o objetivo de compartilhar links
                    relacionado a programação, possui ferramentas como curtidas,
                    comentários e hashTags.
                  </p>

                  <p>
                    A ideia desse projeto é o implementar uma nova maneira para
                    trabalhar em equipe, sendo implementada a metodologia SCRUM
                    para dividir tarefas, reportar avanços e dificuldades, e
                    combinar os dias de entrega de cada task.
                  </p>

                  <p>
                    Várias técnicas também foram aplicadas, como, scroll
                    Infinito, busca de usuário, filtrar hashTags, repostar uma
                    publicação, além de usar PostgresSQL como banco de dados.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="carousel-item"
              data-bs-interval="20000"
              onClick={() => redirectToLink("https://mathrmm.github.io/Test_front_chat/")}
            >
              <div className="row">
                <div className="col-md-4" id="image">
                  <img src={chatUol} className="d-block" alt="..." />
                </div>
                <div className="col-md-8 onlyDesk">
                  <h2 className="mb-4"> Chat Uol </h2>
                  <p>
                    Chato UOL foi criado no intuito de iniciar o aprendizado em
                    Back-end, usando os primeiros conceitos sobre o express e 
                    MongoDb.
                  </p>

                  <p>
                    Nele além da implentação do armazenamento de dados, foi criado um
                    sistema de sessão, onde que se o úsuario entrar ou sair da sala 
                    irá aparecer uma notificação para todos avisando sobre o status.
                  </p>

                  <p>
                    Também foi criado um metodo de conversa privada, podendo selecionar 
                    o nome do úsuario que deseja enviar a mensagem.
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

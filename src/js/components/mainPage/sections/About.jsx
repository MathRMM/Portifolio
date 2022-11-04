import myPhoto from "../../../../images/myphoto.jpeg";

export default function About(){
    return(
        <section id="about" className="container mt-5">
          <div className="row w-100">
            <div className="col-md-12" data-anime='down'>
              <h2 className="pt-3">Sobre</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                earum nulla vel consequatur necessitatibus laborum aliquid
                minima adipisci voluptatem asperiores, est soluta, cupiditate
                deserunt tempora corrupti mollitia odio. Deleniti, saepe? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                repellendus? Dolorem deserunt qui sed laboriosam eaque? Quo
                error fuga deleniti culpa libero, voluptatibus dolorum incidunt
                commodi facere mollitia corporis inventore.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <img
                className="img-fluid shadow mt-4"
                src={myPhoto}
                alt="Foto do Matheus"
                data-anime='left'
              />
            </div>
            <div className="col-md-8 mt-4" data-anime='right'>
              <h3>Estudante</h3>
              <p>
                Atualmente estudo Licenciatura em Ciências Exatas na
                Universidade de São Paulo mas se descobrindo como desenvolvedor
                web, desenvolvendo programas Full-Stacks com JavaScript no
                front-end e no back-end, utilizando bancos de dados SQL e noSQL.
              </p>
              <div className="row">
                <ul className="list-group list-group-flush col-md-6 fs-5">
                  <li className="list-group-item">
                    Niver: <span> 09 de Janeiro de 2000</span>
                  </li>
                  <li className="list-group-item">
                    Idade: <span> 22 Anos</span>
                  </li>
                  <li className="list-group-item">
                    Cidade: <span> Jacareí</span>
                  </li>
                  <li className="list-group-item">
                    Estado: <span> São Paulo</span>
                  </li>
                </ul>
                <ul className="list-group list-group-flush col-md-6 fs-5">
                  <li className="list-group-item">
                    Hobby: <span> Ciclismo e fotografia</span>
                  </li>
                  <li className="list-group-item">
                    Interesses: <span> Aventuras ao ar livre</span>
                  </li>
                  <li className="list-group-item">
                    Profissão: <span> Estudante</span>
                  </li>
                  <li className="list-group-item">
                    Experiência de código: <span> 1 ano</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
}
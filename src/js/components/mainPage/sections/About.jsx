import myPhoto from "../../../../images/a.jpg";

export default function About(){
    return(
        <section id="about" className="container mt-5">
          <div className="row w-100">
            <div className="col-md-12" data-anime='down'>
              <h2 className="pt-3">Sobre</h2>
              <p>
              No último ano me descobri como um solucionador de problemas, com isso me identifiquei com a carreira
              de desenvolvedor Full-Stack na qual utilizo o JavaScript como linguagem para as minhas criações e soluções.
              Durante esse trajeto de estudos realizei diversos projetos para me aprimorar na área, criando um hábito de sempre 
              colocar em prática os novos assuntos aprendidos.
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
              Antes de ser desenvolvedor, estudei Ciências Físicas e Biomoleculares na Universidade de São Paulo,
              onde tive o meu primeiro contato com a programação. Atualmente continuo com a minha vontade de ter um
              diploma, visando cursos como Sistema de Informação ou Ciência da Computação, para aprofundar ainda mais em minha carreira.
              </p>
              <div className="row">
                <ul className="list-group list-group-flush col-md-6 fs-5">
                  <li className="list-group-item">
                    Niver: <span> 09 de Janeiro</span>
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
                    Hobby: <span> Música e fotografia</span>
                  </li>
                  <li className="list-group-item">
                    Interesses: <span> Avanços Tecnologicos</span>
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
export default function Curriculum() {
  return (
    <section className="mt-5 cv" id="curriculum">
      <div className="container pb-5">
        <h2 className="pt-3 pb-4" data-anime='up'>Currículo</h2>

        <div className="row">
          <div className="col-md-6">
            <h3 className="cv-title" data-anime='up'>Educação</h3>

            <div className="cv-item" data-anime="up">
              <h4>Desenvolvimento Web Full-Stack</h4>
              <h5>2022 - 2023</h5>
              <p>
                <em>Driven</em>
              </p>
              <p>
              Curso voltado a programação de desenvolvimento web de modo a atender as
                diversas demandas de uma corporação, estudado as áreas de front-end,
                back-end e soft-skills com uma carga de 1200 horas de aulas teóricas e práticas.
              </p>
            </div>

            <div className="cv-item" data-anime="up">
              <h4>Bacharelado em Ciências Físicas e Biomoleculares</h4>
              <h5>2019 - 2022 (cursado até o 5º período)</h5>
              <p>
                <em>Instito de Física de São Carlos / Universidade de São Paulo</em>
              </p>
              <p>
                Recebi conceitos e técnicas sobre a física teórica e biologia molecular para
                contribuir nas inovações da tecnologia focados na área da Saúde.
                Porem cursei até o 5º período, pois não me identifiquei com a área da física
                e me descobri como desenvolvedor de software.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="cv-title" data-anime='up'>Profissional</h3>

            <div className="cv-item" data-anime="up">
              <h4>Monitor do Espaço Interativo de Ciências / 
                Centro de Pesquisa e inovação em
                Biodiversidade e Fármacos.</h4>
              <h5>2019 - 2020</h5>
              <p>
                <em>Fundação de Amparo à Pesquisa do Estado de São Paulo/ 
                    Instituto de Física São Carlos.</em>
              </p>
              <p>
                Fui monitor do jardim medicinal com a função de realizar visitas guiadas e
                atualização dos materiais disponíveis, trazendo novas fotos e pesquisas relacionadas
                com as plantas medicinais presentes no jardim. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

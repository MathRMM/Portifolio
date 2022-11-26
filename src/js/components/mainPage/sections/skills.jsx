export default function Skills() {
  return (
    <section className="mt-5 section-bg" id="skills">
      <div className="container pb-5">
        <h2 className="pt-5" data-anime="down">
          Habilidades
        </h2>
        <p data-anime="down">
          Em todo tempo como estudante de tecnologia eu adquiri algumas
          habilidades técnicas e não técnicas, a maioria delas estão aqui, de
          acordo com a porcentagem de conhecimento que eu acredito ter em cada
          uma delas.
        </p>
        <div className="row">
          <div className="col-md-6">
            {progressBar("HTML", 70)}
            {progressBar("CSS", 50)}
            {progressBar("JavaScript", 60)}
            {progressBar("ReactJs", 65)}
            {progressBar("TypeScript", 40)}
          </div>
          <div className="col-md-6">
            {progressBar("noSQL(MongoDB)", 60)}
            {progressBar("SQL(PostgresSQL)", 50)}
            {progressBar("NodeJS(Express)", 65)}
            {progressBar("GIT", 70)}
            {progressBar("Jest", 30)}
          </div>
        </div>
        <hr className="w-50 me-auto ms-auto mt-4"></hr>
        <div className="row">
          <div className="col-md-6">
            {progressBar("Trabalho em Equipe", 75, "mb-0")}
            {progressBar("Comunicação", 80)}
            {progressBar("Dedicação", 90)}
          </div>
          <div className="col-md-6">
            {progressBar("Produtividade", 70, "mb-0")}
            {progressBar("Orientação e detalhes", 60)}
            {progressBar("Criatividade", 70)}
          </div>
        </div>
      </div>
    </section>
  );
}

function progressBar(name, percentage, style) {
  return (
    <>
      <p className={style || "mt-3 mb-0"}>{name}</p>
      <div className="progress">
        <div
          className="progress-bar"
          data-anime="left"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-label="Example with label"
          aria-valuenow={`${percentage}`}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${percentage}%`}
        </div>
      </div>
    </>
  );
}

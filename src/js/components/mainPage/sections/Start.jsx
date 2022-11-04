export default function Start(){
    return(
        <section id="start" className="row m-0 p-0">
        <div
          id="title"
          className="col-md-5 d-flex justify-content-center
                  align-items-center flex-column"
        >
          <h2 className="text-white text-shadow">Matheus Melo</h2>
          <span id="subtitle" className="text-white text-shadow">
            Desenvolvedor Web Full-Stack
          </span>
        </div>
        <div
          className="col-md-7 d-flex justify-content-end
                  align-items-end flex-column"
        >
          <div id="drag" className="d-flex align-items-center">
            <i className="bi bi-arrow-down text-white pe-2 fe-2"></i>
            <a href="#about" className="text-white">
              Arrate para mais
            </a>
          </div>
        </div>
      </section>
    )
}